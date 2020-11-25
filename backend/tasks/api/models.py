from django.db import models

class Task(models.Model):
    title = models.TextField(max_length=32, blank=False, null = False)
    description = models.TextField(max_length=200, blank=False, null = False)
    status = models.IntegerField(max_length=50, blank=False, null = False)
