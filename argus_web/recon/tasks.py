# Create your tasks here
from __future__ import absolute_import, unicode_literals

from celery import shared_task
from .models import Any

@shared_task
def filter_sonar(search):
    result = []
    query_result = Any.objects.filter(name__contains=search)

    for row in query_result:
        result.append([row.timestamp, row.name, row.type, row.value])

    return result
