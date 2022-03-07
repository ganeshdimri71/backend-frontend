from django.db import models

# Create your models here.

class Register(models.Model):
    fullName = models.CharField("name", max_length=240)
    email = models.CharField("email", max_length=240, unique=True)
    mobile = models.CharField("mobile", max_length=240, unique=True)
    password = models.CharField("password", max_length=240)

    def __str__(self):
        return self.fullName
