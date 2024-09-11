from rest_framework.views import APIView
from django.forms.models import model_to_dict
from musicians.models import Musician
from rest_framework.response import Response
from rest_framework.request import Request


class MusicianView(APIView):
    def post(self, request: Request) -> Response:
        musician = Musician.objects.create(**request.data)
        return Response(model_to_dict(musician), 201)

    def get(self, request: Request) -> Response:
        musicians = Musician.objects.all()
        return Response([model_to_dict(m) for m in musicians])


class MusicianDetailView(APIView):

    def get(self, request: Request, musician_id: int) -> Response:
        try:
            musician = Musician.objects.get(pk=musician_id)
        except Musician.DoesNotExist:
            return Response({"error": "account not found"}, 404)

        musician_dict = model_to_dict(musician)
        return Response(musician_dict)
