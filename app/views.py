from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def translation(request):
    return render(request, 'main/translation.html')

def translation_streamer(request):
    return render(request, 'main/translation-streamer.html')

def all_translation(request):
    return render(request, 'main/all-translation.html')

def create_translation(request):
    return render(request, 'main/create-translation.html')

def plan_translation(request):
    return render(request, 'main/plan-translation.html')

def lk(request):
    return render(request, 'main/lk.html')

def lk_streamer(request):
    return render(request, 'main/lk-streamer.html')
# Create your views here.
