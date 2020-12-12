from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField
from django.contrib import auth


# Create your models here.
class Languages(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=300)


class UserProfile(models.Model):
    user = models.OneToOneField(auth.get_user_model(), on_delete=models.CASCADE, related_name='profile',
                                verbose_name='Пользователь')
    first_name = models.CharField(max_length=200, verbose_name='Имя')
    last_name = models.CharField(max_length=300, verbose_name='Фамилия')
    pat_name = models.CharField(max_length=300, verbose_name='Отчество', blank=True, null=True)
    birth_date = models.DateTimeField(verbose_name='Дата рождения', null=True, blank=True)
    avatar = models.ImageField(upload_to='images', null=True, blank=True)
    about = models.TextField(verbose_name='О себе', null=True, blank=True)
    learned_language = models.OneToOneField(Languages, on_delete=models.CASCADE, related_name='language', null=True,
                                            blank=True)
    date_joined = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профили пользователя'

    def __str__(self):
        return self.user.username


class Question(models.Model):
    question = models.TextField(verbose_name='Вопрос')
    questionImg = models.ImageField(upload_to='images', null=True, blank=True)
    answers = ArrayField(models.CharField(max_length=500))
    correctAnswer = models.CharField(max_length=500)
    author = models.OneToOneField(auth.get_user_model(), on_delete=models.CASCADE, related_name='question', null=True,
                                  verbose_name='Автор')
    published = models.BooleanField(default=False, verbose_name='Опубликован')
    created_at = models.DateTimeField(verbose_name='Дата создания', auto_now=True, editable=False)

    class Meta:
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return self.question
