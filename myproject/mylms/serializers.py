from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['id','first_name','last_name','email','password','confirm_password','qulfication','mobile_number','skills']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
       model=models.Course_categories
       fields=['id','title','description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
       model=models.Course
       #fields = '_all_' 
       fields=['id','category','teacher','title','description','featured_img','techs']