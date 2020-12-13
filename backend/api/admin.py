from django.contrib import admin
from .models import Question, UserProfile, DifficultyLevel, QuestionGroup
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin


# Register your models here.
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'last_name', 'first_name', 'pat_name', 'birth_date')


class QuestionAdmin(admin.ModelAdmin, DynamicArrayMixin):
    list_display = ('question', 'author', 'published', 'created_at')


class DifficultyLevelAdmin(admin.ModelAdmin):
    list_display = ('name',)


class QuestionGroupAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(DifficultyLevel, DifficultyLevelAdmin)
admin.site.register(QuestionGroup, QuestionGroupAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
