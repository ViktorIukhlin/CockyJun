# Generated by Django 3.1.4 on 2020-12-12 07:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20201212_0717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='about',
            field=models.TextField(blank=True, null=True, verbose_name='О себе'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='birth_date',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Дата рождения'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='learned_language',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='language', to='api.languages'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='pat_name',
            field=models.CharField(blank=True, max_length=300, null=True, verbose_name='Отчество'),
        ),
    ]
