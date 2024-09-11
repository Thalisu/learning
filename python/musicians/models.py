from django.db import models


# Create your models here.
class Musician(models.Model):
    first_name = models.CharField(max_length=50)  # type: ignore
    last_name = models.CharField(max_length=50)  # type: ignore
    instrument = models.CharField(max_length=30)  # type: ignore
