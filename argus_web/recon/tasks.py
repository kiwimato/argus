# Create your tasks here
from __future__ import absolute_import, unicode_literals

from celery import shared_task
from .models import Any
import json
#from demoapp.models import Widget


@shared_task
def filter_sonar(search):
    result = []
    query_result = Any.objects.filter(name=search)

    for row in query_result:
        result.append({
            'timestmap': row.timestamp,
            'name': row.name,
            'type': row.type,
            'value': row.value,
        })

    return json.dumps(result)
