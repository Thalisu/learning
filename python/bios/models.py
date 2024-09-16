from django.db import models


class Bio(models.Model):
    author = models.CharField(max_length=100)  # type: ignore
    title = models.CharField(max_length=50)  # type: ignore
    pulished_date = models.DateField(null=True)  # type: ignore

    musician = models.OneToOneField(
        "musicians.Musician", on_delete=models.CASCADE
    )  # type: ignore
