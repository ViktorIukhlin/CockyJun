from django.contrib import admin
from .models import Question
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin


# Register your models here.
class QuestionAdmin(admin.ModelAdmin, DynamicArrayMixin):
    list_display = ('question', 'author', 'published', 'created_at')


admin.site.register(Question, QuestionAdmin)