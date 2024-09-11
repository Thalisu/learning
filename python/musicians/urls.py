from django.urls import path
from musicians.views import MusicianView, MusicianDetailView

urlpatterns = [
    path("musicians/", MusicianView.as_view()),
    path("musicians/<int:musician_id>", MusicianDetailView.as_view()),
]
