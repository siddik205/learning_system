from django.db import models
# Create your models here.
class Teacher(models.Model):
#teacher details
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=100)
    confirm_password=models.CharField(max_length=100)
    qulfication=models.CharField(max_length=100)
    mobile_number=models.CharField(max_length=100)
    skills=models.CharField(max_length=10)
    class Meta:
        verbose_name = "Teacher"  #singular form
        verbose_name_plural = "1.Teachers"  # Customize as needed

#categories
class Course_categories(models.Model):
    Title=models.CharField(max_length=100)
    Course_description=models.CharField(max_length=100)
    description=models.TextField()
    featured_img=models.ImageField(upload_to='course_imgs/')
    techs=models.TextField()

    class Meta:
        verbose_name = "Course_categories"
        verbose_name_plural = "2.Course_categories"  # Customize as needed
#student details
class Student(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=20)
    confirm_password=models.CharField(max_length=20)
    select_course=models.CharField(max_length=100)

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "3.Student"  # Customize as needed
#course
class Course(models.Model):
    Categories=models.ForeignKey(Course_categories,on_delete=models.SET_NULL,null=True)
    Teacher=models.ForeignKey(Teacher,on_delete=models.SET_NULL,null=True)
    Title=models.CharField(max_length=100)
    Course_description=models.TextField()

    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "4.Courses"  # Customize as needed
