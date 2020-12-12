# Generated by Django 3.1.4 on 2020-12-12 05:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0006_auto_20201211_2035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='created_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Дата создания'),
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=300, verbose_name='Фамилия')),
                ('pat_name', models.CharField(max_length=300, verbose_name='Отчество')),
                ('birth_date', models.DateTimeField(null=True, verbose_name='Дата рождения')),
                ('date_joined', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
