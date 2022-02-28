# Generated by Django 4.0.2 on 2022-02-17 17:06

import PollZ.models
import django.core.validators
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('opinion_list', models.CharField(max_length=300, validators=[django.core.validators.int_list_validator], verbose_name='Meinung')),
                ('age_group', models.IntegerField(default=-1, verbose_name='Alter')),
                ('gender', models.IntegerField(default=0, verbose_name='Geschlecht')),
                ('pub_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Datum')),
                ('color', models.CharField(default=PollZ.models.random_color, max_length=100, verbose_name='Projektfarbe')),
            ],
        ),
    ]
