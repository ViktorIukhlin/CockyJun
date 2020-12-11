from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField
from django.contrib import auth
from django.utils.timezone import now

# Create your models here.
class Question(models.Model):
    question = models.TextField(verbose_name='Вопрос')
    questionImg = models.ImageField(upload_to='images', null=True, blank=True)
    answers = ArrayField(models.CharField(max_length=500))
    correctAnswer = models.CharField(max_length=500)
    author = models.OneToOneField(auth.get_user_model(), on_delete=models.CASCADE, related_name='question', null=True, verbose_name='Автор')
    published = models.BooleanField(default=False, verbose_name='Опубликован')
    created_at = models.DateTimeField(verbose_name='Дата создания', default=now, editable=False)

    class Meta:
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return self.question
