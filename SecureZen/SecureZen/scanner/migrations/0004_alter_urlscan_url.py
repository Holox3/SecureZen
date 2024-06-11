# Generated by Django 4.2.7 on 2024-02-29 01:47

from django.db import migrations, models
import scanner.models


class Migration(migrations.Migration):

    dependencies = [
        ('scanner', '0003_filescan_user_urlscan_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='urlscan',
            name='url',
            field=models.URLField(max_length=500, validators=[scanner.models.validate_url]),
        ),
    ]
