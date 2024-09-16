from django.db import models


class Tag(models.Model):
    name = models.CharField(max_length=255)  # type: ignore

    albums = models.ManyToManyField("albums.Album", related_name="tags")  # type: ignore
