from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('translation-streamer', views.translation_streamer, name='translation_streamer'),
    path('translation', views.translation, name='translation'),
    path('translation-all', views.all_translation, name='translation_all'),
    path('translation-create', views.create_translation, name='translation_create'),
    path('translation-plan', views.plan_translation, name='translation_plan'),
    path('lk', views.lk, name='lk'),
    path('lk-streamer', views.lk_streamer, name='lk_streamer'),
]