from rest_framework import serializers
from .models import Tag


class TagSerialier(serializers.Serializer):
    name = serializers.CharField(max_length=30, choices=Tag.choices, default=Tag.OTHER)  # type: ignore

    albums = serializers.ManyToManyField("albums.Album", related_name="tags")  # type: ignore
