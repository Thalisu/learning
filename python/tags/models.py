from django.db import models


class Tags(models.TextChoices):
    POP = "Pop"
    ROCK = "Rock"
    JAZZ = "Jazz"
    CLASSIC = "Classic"
    HIP_HOP = "Hip Hop"
    OTHER = "Other"


class Tag(models.Model):
    name = models.CharField(max_length=30, choices=Tags.choices, default=Tags.OTHER)  # type: ignore

    albums = models.ManyToManyField("albums.Album", related_name="tags")  # type: ignore
