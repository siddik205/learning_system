from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Teacher)
admin.site.register(models.Course_categories)
admin.site.register(models.Student)
admin.site.register(models.Course)