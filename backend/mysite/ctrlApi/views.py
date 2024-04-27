from django.shortcuts import render
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import status
from rest_framework.views import APIView
from  . models import (User,Doctor_Nurce_Profile,PatientAppointment,Ambulance,Organization,UserProfile,AmbulanceBooking)
# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework import viewsets
from drf_spectacular.utils import extend_schema
from rest_framework import permissions,status,parsers
from . healthcareserializer import (
     AmbulanceSerializer,
     AppointmentSerializers,
     OrganizationSerializer,
     CreateUserSerializer,
     StaffProfileSerializer,
      UserProfileSerializer,
      AmbulanceBookingSerializer
 )

from rest_framework import filters,serializers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from drf_spectacular.utils import extend_schema

from django.shortcuts import render
from .healthcareserializer import ChatbotSerializer
# Create your views here.
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework import serializers, status
from drf_spectacular.utils import extend_schema
from .chatbot.bot import augment_prompt

## ## get Total Doctor
class TotalDoctor(APIView):
    def get(self, request):
        # Get the total count of customers
        total_staff = Doctor_Nurce_Profile.objects.count()
        return Response({'total_staff': total_staff})
    

# class TotalDoctor(APIView):
#     def get(self, request):
#         # Get the total count of customers
#         total_staff = Doctor_Nurce_Profile.objects.count()
#         return Response({'total_staff': total_staff})
    
## get total PatientAppointment
class PatientAppointmentCount(APIView):
    def get(self, request):
        # Get the total count of customers
        total_appointmentCount = PatientAppointment.objects.count()
        return Response({'total_patient_appointmentCount': total_appointmentCount})

class ChatbotView(GenericAPIView):
    serializer_class = ChatbotSerializer
    @extend_schema(summary='Send a Message', methods=["GET"],description='chat with healthcare asistance',filters=True,tags=['Chatbot'])
    def post(self,request,format=None):
        serializer = ChatbotSerializer(data=self.request.data)
        if serializer.is_valid():
            query = serializer.validated_data.get('query')
            openai_api_key = serializer.validated_data.get('openai_api_key')
            index_name = serializer.validated_data.get('index_name')
           
            query_response =  augment_prompt(query,openai_api_key,index_name)
            return Response(dict(message=query_response),status=status.HTTP_200_OK)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# create create_doctor_or_nurse_profile on signer
@receiver(post_save, sender=User)
def create_doctor_or_nurse_profile(sender, instance, created, **kwargs):
    if created:
       Doctor_Nurce_Profile.objects.create(user=instance)


post_save.connect(create_doctor_or_nurse_profile, sender=settings.AUTH_USER_MODEL)


### user profile
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
       UserProfile.objects.create(user=instance)
post_save.connect(create_user_profile, sender=settings.AUTH_USER_MODEL)



class UserProfileViewSet(viewsets.ModelViewSet):
   serializer_class = UserProfileSerializer
   queryset = UserProfile.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   parser_classes = [parsers.MultiPartParser,parsers.FormParser]
     
   @extend_schema(tags=['UserProfile'],summary='get all UserProfile')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['UserProfile'],summary='retrieve UserProfile by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['UserProfile'],summary='update UserProfile')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['UserProfile'],summary='partial update UserProfile')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='delete UserProfile')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   

class AmbulanceBookingViewSet(viewsets.ModelViewSet):
   serializer_class = AmbulanceBookingSerializer
   queryset = AmbulanceBooking.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   
   @extend_schema(tags=['AmbulanceBooking'],summary='book call Ambulance')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
     
   @extend_schema(tags=['AmbulanceBooking'],summary='get all AmbulanceBooking')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['AmbulanceBooking'],summary='retrieve AmbulanceBooking by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['AmbulanceBooking'],summary='update AmbulanceBooking')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['AmbulanceBooking'],summary='partial update AmbulanceBooking')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['AmbulanceBooking'],summary='delete AmbulanceBooking')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

class AdminUserViewSet(viewsets.ModelViewSet):
   serializer_class = CreateUserSerializer
   queryset = User.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   
   @extend_schema(tags=['User'],summary='create new User')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='get all User')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='retrieve User by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='update User')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='partial update User')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['User'],summary='delete User')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   
   


class AmbulanceViewSet(viewsets.ModelViewSet):
   serializer_class = AmbulanceSerializer
   queryset = Ambulance.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   
   @extend_schema(tags=['Ambulance'],summary='create Ambulance')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Ambulance'],summary='get all Ambulance')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Ambulance'],summary='retrieve Ambulance by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Ambulance'],summary='update Ambulance')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Ambulance'],summary='partial update Ambulance')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Ambulance'],summary='delete Ambulance')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   
   
class OrganizationViewSet(viewsets.ModelViewSet):
   serializer_class = OrganizationSerializer
   queryset = Organization.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   parser_classes = [parsers.MultiPartParser,parsers.FormParser]
  
   @extend_schema(tags=['Organization'],summary='create Organization')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Organization'],summary='get all Organization')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Organization'],summary='retrieve Organization by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Organization'],summary='update Organization')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Organization'],summary='partial update Organization')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Organization'],summary='delete Organization')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   

class  AppointmentViewSet(viewsets.ModelViewSet):
   serializer_class = AppointmentSerializers
   queryset =  PatientAppointment.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   parser_classes = [parsers.MultiPartParser,parsers.FormParser]
   
   @extend_schema(tags=['Appointment'],summary='create new Appointment')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Appointment'],summary='get all Appointment')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Appointment'],summary='retrieve Appointment by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Appointment'],summary='update Appointment')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Appointment'],summary='partial update Appointment')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Appointment'],summary='delete Appointment')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   
class StaffProfileViewSet(viewsets.ModelViewSet):
   serializer_class = StaffProfileSerializer
   queryset =  Doctor_Nurce_Profile.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   parser_classes = [parsers.MultiPartParser,parsers.FormParser]
   
   @extend_schema(tags=['Staff'],summary='create new staff')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Staff'],summary='get all staff')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Staff'],summary='retrieve staff by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Staff'],summary='update staff')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Staff'],summary='partial update staff')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Staff'],summary='delete stafff')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   
   
   
   
class CreateDoctorViewSet(viewsets.ModelViewSet):
   serializer_class = CreateUserSerializer
   queryset =  User.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   
   @extend_schema(tags=['Doctor'],summary='create new Doctor')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Doctor'],summary='get all Doctor')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Doctor'],summary='retrieve Doctor by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Doctor'],summary='update Doctor')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Doctor'],summary='partial update Doctor')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Doctor'],summary='delete Doctor')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   
   def perform_create(self, serializer):
      serializer.validated_data['is_doctor'] = True
      serializer.validated_data['is_admin'] = False
      serializer.validated_data['role'] = 'Doctor'
      serializer.save()
      return super().perform_create(serializer)
   
   
   
class CreateNurseViewSet(viewsets.ModelViewSet):
   serializer_class = CreateUserSerializer
   queryset =  User.objects.all()
   permission_classes = [permissions.IsAuthenticated]
   
   @extend_schema(tags=['Nurse'],summary='create new Nurse')
   def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
    
   @extend_schema(tags=['Nurse'],summary='get all Nurse')
   def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
   @extend_schema(tags=['Nurse'],summary='retrieve Nurse by id')
   def retrieve(self, request, *args, **kwargs):
        return super().retrieve(request, *args, **kwargs)
    
   @extend_schema(tags=['Nurse'],summary='update Nurse')
   def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
   @extend_schema(tags=['Nurse'],summary='partial update Nurse')
   def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)
    
   @extend_schema(tags=['Nurse'],summary='delete Nurse')
   def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
   
   def perform_create(self, serializer):
      serializer.validated_data['is_nurse'] = True
      serializer.validated_data['is_admin'] = False
      serializer.validated_data['role'] = 'Nurse'
      
      serializer.save()
      return super().perform_create(serializer)
   
   
   
   




## token sserializers

class TokenObtainPairResponseSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()

    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()
    


class TokenRefreshResponseSerializer(serializers.Serializer):
    access = serializers.CharField()

    def create(self, validated_data):
        raise NotImplementedError()

    def update(self, instance, validated_data):
        raise NotImplementedError()   
   



class DecoratedTokenObtainPairView(TokenObtainPairView):
    @extend_schema(tags=['Auth'],summary='get token',
        responses={
            status.HTTP_200_OK: TokenObtainPairResponseSerializer,
        }
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)



class DecoratedTokenRefreshView(TokenRefreshView):
    @extend_schema(tags=['Auth'],summary='refresh token',
        responses={
            status.HTTP_200_OK: TokenRefreshResponseSerializer,
        }
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
   
