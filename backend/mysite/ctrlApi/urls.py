from django.urls import path,include
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from rest_framework import routers 
from . import views

### routers
router = routers.SimpleRouter()
router.register(r'adminusers',views.AdminUserViewSet)
router.register(r'ambulance',views.AmbulanceViewSet)
router.register(r'organizations',views.OrganizationViewSet)
router.register(r'appointments',views.AppointmentViewSet)
router.register(r'staffprofile',views.StaffProfileViewSet)
router.register(r'nurse',views.CreateNurseViewSet,basename='nurse')
router.register(r'doctor',views.CreateDoctorViewSet,basename='doctor')
router.register(r'profile',views.UserProfileViewSet,basename='UserProfileViewSet')
router.register(r'bookambulance',views.AmbulanceBookingViewSet,basename='AmbulanceBookingViewSet')


urlpatterns = [
    path('', include('authemail.urls')),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/token/',views.DecoratedTokenObtainPairView.as_view(),name="token"),
    path('api/token/refresh/',views.DecoratedTokenRefreshView.as_view(),name="refresh_token"),
    path('totalappointment',views.PatientAppointmentCount.as_view()),
    path('totaldoctor',views.TotalDoctor.as_view()),
    path('chatbot/',views.ChatbotView.as_view()),
]
urlpatterns += router.urls
