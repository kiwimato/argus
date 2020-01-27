from django.urls import path
from django.conf.urls import url

from .views import OrderListJson
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    url('/datatable/data/$', OrderListJson.as_view(), name='order_list_json'),
    path('task/<str:task_id>/', views.TaskView.as_view(), name='task'),
]