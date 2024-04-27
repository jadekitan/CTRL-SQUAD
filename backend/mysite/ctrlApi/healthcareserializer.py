from rest_framework import serializers
from .models import PatientAppointment,Organization,Ambulance,Doctor_Nurce_Profile,User,UserProfile,AmbulanceBooking



    

class AppointmentSerializers(serializers.ModelSerializer):
    class Meta:
        model=PatientAppointment
        fields = '__all__'
        read_only_fields = ['id']
        
class StaffProfileSerializer(serializers.ModelSerializer):
    staffspatients = AppointmentSerializers(many=True,read_only=True)
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    email = serializers.CharField(source='user.email')
    role = serializers.CharField(source='user.role')
    class Meta:
        model=Doctor_Nurce_Profile
        fields=['id','first_name','last_name','email','is_available','role','stafforganization',
                 'specialization','bio','photo','user','staffspatients']
        read_only_fields = ['id']

class AmbulanceBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AmbulanceBooking
        fields = '__all__'

class AmbulanceSerializer(serializers.ModelSerializer):
     booking = AmbulanceBookingSerializer(many=True,read_only=True)
     class Meta:
        model =  Ambulance
        fields = ['id','organization','is_available','team_phone','team_email','booking']
        read_only_fields = ['id']


class OrganizationSerializer(serializers.ModelSerializer):
    organizationstaffs = StaffProfileSerializer(many=True, read_only=True)
    ambulance = AmbulanceSerializer(many=True, read_only=True)
    appointments = AppointmentSerializers(many=True,read_only=True)
    
    class Meta:
        model = Organization
        fields =  ['id','org_specialization','organization_name',
                   'city','state','address','email','bio','banner','ambulance',
                   'appointments','logo','date_created','owner','url','organizationstaffs']
        read_only_fields = ['id']
        

class CreateUserSerializer(serializers.ModelSerializer):
    organization = OrganizationSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['email', 'first_name','last_name','phone','password','organization','role','is_nurse','is_doctor','is_admin']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone=validated_data['phone']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
        
        

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



class ChatbotSerializer(serializers.Serializer):
    query = serializers.CharField(max_length=200)
    index_name = serializers.CharField(max_length=200)
    openai_api_key  = serializers.CharField(required=True, allow_blank=False, max_length=255)