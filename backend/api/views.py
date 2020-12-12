from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .permissions import IsOwnerProfileOrReadOnly
from .serializers import UserProfileSerializer, QuestionSerializer
from .models import UserProfile, Question


# Create your views here.
class UserQuestionsView(ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(author=self.request.user)


class UserProfileDetailView(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerProfileOrReadOnly, IsAuthenticated]

    def get_queryset(self):
        if self.action == 'list':
            return self.queryset.filter(user=self.request.user)
