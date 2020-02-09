from django.urls import path

from . import views
from .views import explore_sonar, get_task_info

urlpatterns = [
    path('', views.index, name='index'),
    path('explore-sonar/', explore_sonar),
    path('get-task-info/', get_task_info),
]