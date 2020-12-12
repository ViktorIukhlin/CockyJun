from django.urls import path
from .views import UserProfileDetailView, UserQuestionsView

urlpatterns = [
    path('profile/', UserProfileDetailView.as_view({'get': 'list'}), name='profile'),
    path('questions/', UserQuestionsView.as_view({'get': 'list'}), name='question')
]
