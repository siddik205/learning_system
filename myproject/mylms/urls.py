from django.urls import path
from . import views

urlpatterns=[
    path('teachers/',views.TeacherList.as_view()),
    path('teachers/<int:pk>/',views.TeacherDetails.as_view()),
    path('login',views.teacher_login)
 ,  path('category/',views.CategoryList.as_view()),

    path('course/',views.CourseList.as_view()),

    #path('tmycourses/<int:teacher_id>',views.TeacherCourseList.as_view())

]

