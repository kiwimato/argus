from .tasks import filter_sonar
from .forms import SearchForm
from django.shortcuts import render
from django.http import HttpResponse
from celery.result import AsyncResult
import json


def index(request):
    return HttpResponse("Hello, world. You're at the recon index.")


def explore_sonar(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            search_value = form.cleaned_data.get('search')
            task = filter_sonar.delay(search_value)
            return HttpResponse(json.dumps({'task_id': task.id}), content_type='application/json')
        else:
            return HttpResponse(json.dumps({'task_id': None}), content_type='application/json')
    else:
        form = SearchForm
    return render(request, 'search_sonar.html', {'form': form})


def get_task_info(request):
    task_id = request.GET.get('task_id', None)
    if task_id is not None:
        task = AsyncResult(task_id)
        data = {
            'state': task.state,
            'result': task.result,
        }
        return HttpResponse(json.dumps(data), content_type='application/json')
    else:
        return HttpResponse('No job id given.')