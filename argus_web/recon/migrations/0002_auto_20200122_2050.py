# Generated by Django 3.0.2 on 2020-01-22 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recon', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='age',
            new_name='agez',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='birthday',
            new_name='birthdayz',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='first_name',
            new_name='first_namez',
        ),
    ]
