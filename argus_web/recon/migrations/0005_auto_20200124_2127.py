# Generated by Django 3.0.2 on 2020-01-24 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recon', '0004_somestuff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='age',
        ),
        migrations.RemoveField(
            model_name='user',
            name='birthday',
        ),
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
    ]
