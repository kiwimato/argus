from django.db.models import Q
from django_datatables_view.base_datatable_view import BaseDatatableView
from recon.models import Any
from .tasks import filter_sonar
from django.utils.html import escape
#from celery.decorators import task
from celery import shared_task
from django.shortcuts import render
from django.http import JsonResponse
from celery import current_app
from django.views import View
from django.http import HttpResponse
from django.utils.functional import cached_property


def index(request):
    return HttpResponse("Hello, world. You're at the recon index.")


class OrderListJson(BaseDatatableView):
    # The model we're going to show
    model = Any

    # define the columns that will be returned
    columns = ['name', 'type', 'value']

    # define column names that will be used in sorting
    # order is important and should be same as order of columns
    # displayed by datatables. For non sortable columns use empty
    # value like ''
    order_columns = ['name', 'type', 'sorting']

    # set max limit of records returned, this is used to protect our site if someone tries to attack our site
    # and make it return huge amount of data
    max_display_length = 500

    def render_column(self, row, column):
        # We want to render user as a custom column
        # escape HTML for security reasons
        return super(OrderListJson, self).render_column(row, column)

    def filter_queryset(self, qs):
        # use parameters passed in GET request to filter queryset

        # simple example:
        context = {}
        search = self.request.GET.get('search', None)
        if search:
            task = filter_sonar.delay(search)
            print(task)

        context['task_id'] = task.id
        context['task_status'] = task.status
        return context
        #return render('recon/results.html', context)


class TaskView(View):
    def get(self, request, task_id):
        task = current_app.AsyncResult(task_id)
        response_data = {'task_status': task.status, 'task_id': task.id}

        if task.status == 'SUCCESS':
            response_data['results'] = task.get()

        return JsonResponse(response_data)