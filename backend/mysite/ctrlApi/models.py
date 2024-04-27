from django.db import models

from django.conf import settings
from django.db import models
# Create your models here.
import uuid
from authemail.models import EmailUserManager, EmailAbstractUser


class Organization(models.Model):
    specialties = [
    ("Cardiologist: Specializes in diagnosing and treating diseases related to the heart and blood vessels. ", "Specializes in diagnosing and treating diseases related to the heart and blood vessels."),
    ("Neurologist: Deals with disorders of the nervous system, including the brain, spinal cord, and nerves. ", "Deals with disorders of the nervous system, including the brain, spinal cord, and nerves."),
    ("Oncologist: Focuses on the diagnosis and treatment of cancer. ", "Focuses on the diagnosis and treatment of cancer."),
    ("Orthopedic Surgeon: Specializes in treating musculoskeletal injuries and disorders, including bones, joints, ligaments, tendons, and muscles. ", "Specializes in treating musculoskeletal injuries and disorders, including bones, joints, ligaments, tendons, and muscles."),
    ("Pediatrician: Provides medical care for infants, children, and adolescents. ", "Provides medical care for infants, children, and adolescents."),
    ("Gynecologist/Obstetrician (OB/GYN): Deals with the female reproductive system, providing care for women during pregnancy, childbirth, and postpartum. ", "Deals with the female reproductive system, providing care for women during pregnancy, childbirth, and postpartum."),
    ("Dermatologist: Specializes in diagnosing and treating conditions related to the skin, hair, and nails. ", "Specializes in diagnosing and treating conditions related to the skin, hair, and nails."),
    ("Endocrinologist: Focuses on disorders of the endocrine system, including hormones and glands such as the thyroid, pancreas, and adrenal glands. ", "Focuses on disorders of the endocrine system, including hormones and glands such as the thyroid, pancreas, and adrenal glands."),
    ("Gastroenterologist: Deals with diseases and disorders of the digestive system, including the stomach, intestines, liver, and pancreas. ", "Deals with diseases and disorders of the digestive system, including the stomach, intestines, liver, and pancreas."),
    ("Pulmonologist: Specializes in diseases of the respiratory system, including the lungs and airways. ", "Specializes in diseases of the respiratory system, including the lungs and airways."),
    ("Urologist: Focuses on diseases and disorders of the urinary tract and male reproductive system. ", "Focuses on diseases and disorders of the urinary tract and male reproductive system."),
    ("Rheumatologist: Deals with autoimmune and musculoskeletal disorders, such as arthritis. ", "Deals with autoimmune and musculoskeletal disorders, such as arthritis."),
    ("Psychiatrist: Specializes in diagnosing and treating mental health disorders. ", "Specializes in diagnosing and treating mental health disorders."),
    ("Anesthesiologist: Administers anesthesia and monitors patients during surgery and other medical procedures. ", "Administers anesthesia and monitors patients during surgery and other medical procedures."),
    ("Radiologist: Interprets medical imaging tests such as X-rays, CT scans, MRIs, and ultrasounds. ", "Interprets medical imaging tests such as X-rays, CT scans, MRIs, and ultrasounds."),
    ("Ophthalmologist: Deals with diseases and disorders of the eye, providing medical and surgical care. ", "Deals with diseases and disorders of the eye, providing medical and surgical care."),
    ("Neonatologist: Specializes in the care of newborn infants, particularly those who are premature or have health complications. ", "Specializes in the care of newborn infants, particularly those who are premature or have health complications."),
    ("Nephrologist: Focuses on diseases and disorders of the kidneys. ", "Focuses on diseases and disorders of the kidneys."),
    ("Allergist/Immunologist: Specializes in diagnosing and treating allergies and immune system disorders. ", "Specializes in diagnosing and treating allergies and immune system disorders."),
    ("Geriatrician: Provides medical care for elderly patients, addressing age-related health concerns and promoting healthy aging. ", "Provides medical care for elderly patients, addressing age-related health concerns and promoting healthy aging."),
    ("Intensivist: Specializes in caring for critically ill patients in the intensive care unit (ICU). ", "Specializes in caring for critically ill patients in the intensive care unit (ICU)."),
    ("Hematologist: Focuses on diseases and disorders of the blood, including leukemia, anemia, and clotting disorders. ", "Focuses on diseases and disorders of the blood, including leukemia, anemia, and clotting disorders."),
    ("Infectious Disease Specialist: Deals with the diagnosis and treatment of infectious diseases caused by bacteria, viruses, fungi, or parasites. ", "Deals with the diagnosis and treatment of infectious diseases caused by bacteria, viruses, fungi, or parasites."),
    ("Pain Management Specialist: Specializes in diagnosing and treating chronic pain conditions, using a variety of techniques including medications, physical therapy, and interventional procedures. ", "Specializes in diagnosing and treating chronic pain conditions, using a variety of techniques including medications, physical therapy, and interventional procedures."),
    ("Sports Medicine Physician: Provides medical care for athletes and individuals with sports-related injuries, focusing on prevention, diagnosis, and treatment. ", "Provides medical care for athletes and individuals with sports-related injuries, focusing on prevention, diagnosis, and treatment."),
    ("Sleep Medicine Specialist: Deals with disorders related to sleep, such as insomnia, sleep apnea, and narcolepsy. ", "Deals with disorders related to sleep, such as insomnia, sleep apnea, and narcolepsy."),
    ("Plastic Surgeon: Specializes in cosmetic and reconstructive surgery to improve the appearance or function of body structures. ", "Specializes in cosmetic and reconstructive surgery to improve the appearance or function of body structures."),
    ("ENT Specialist (Otolaryngologist): Deals with disorders of the ear, nose, and throat, including hearing loss, sinusitis, and throat infections. ", "Deals with disorders of the ear, nose, and throat, including hearing loss, sinusitis, and throat infections."),
    ("Physiatrist (Physical Medicine and Rehabilitation Physician): Focuses on restoring function and improving quality of life for patients with physical disabilities or injuries. ", "Focuses on restoring function and improving quality of life for patients with physical disabilities or injuries."),
    ("Geneticist: Specializes in diagnosing and managing genetic disorders and providing genetic counseling to patients and families. ", "Specializes in diagnosing and managing genetic disorders and providing genetic counseling to patients and families."),
    ("Palliative Care Physician: Focuses on relieving pain and managing symptoms for patients with serious illnesses, aiming to improve quality of life and provide support for patients and their families. ", "Focuses on relieving pain and managing symptoms for patients with serious illnesses, aiming to improve quality of life and provide support for patients and their families."),
    ("Addiction Medicine Specialist: Deals with the prevention, diagnosis, and treatment of substance abuse and addiction disorders. ", "Deals with the prevention, diagnosis, and treatment of substance abuse and addiction disorders."),
    ("Clinical Genetic Counselor: Provides counseling and support to individuals and families at risk for inherited genetic conditions. ", "Provides counseling and support to individuals and families at risk for inherited genetic conditions."),
    ("Reproductive Endocrinologist: Specializes in fertility and reproductive health, providing treatments for infertility and hormonal disorders affecting fertility. ", "Specializes in fertility and reproductive health, providing treatments for infertility and hormonal disorders affecting fertility."),
    ("Interventional Radiologist: Performs minimally invasive procedures using medical imaging techniques to diagnose and treat various conditions, such as placing stents or performing biopsies. ", "Performs minimally invasive procedures using medical imaging techniques to diagnose and treat various conditions, such as placing stents or performing biopsies."),
    ("Forensic Pathologist: Investigates the cause of death in cases of suspicious or sudden deaths, often working with law enforcement agencies. ", "Investigates the cause of death in cases of suspicious or sudden deaths, often working with law enforcement agencies."),
    ("Wound Care Specialist: Focuses on the treatment and management of complex wounds, such as diabetic ulcers, pressure sores, and surgical wounds. ", "Focuses on the treatment and management of complex wounds, such as diabetic ulcers, pressure sores, and surgical wounds."),
    ("Telemedicine Specialist: Provides medical care remotely through telecommunication technologies, offering consultations, diagnoses, and treatment plans over video calls or other virtual platforms. ", "Provides medical care remotely through telecommunication technologies, offering consultations, diagnoses, and treatment plans over video calls or other virtual platforms."),
    ("Occupational Medicine Physician: Focuses on the prevention and management of work-related injuries and illnesses, as well as promoting workplace health and safety. ", "Focuses on the prevention and management of work-related injuries and illnesses, as well as promoting workplace health and safety."),
    ("Adolescent Medicine Specialist: Provides medical care specifically tailored to the unique health needs of adolescents and young adults, addressing physical, emotional, and social aspects of health and development. ", "Provides medical care specifically tailored to the unique health needs of adolescents and young adults, addressing physical, emotional, and social aspects of health and development.")
]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='organization')
    org_specialization =  models.CharField(max_length=255, choices=specialties)
    organization_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField()
    bio = models.TextField()
    banner = models.ImageField(upload_to='upload/banner')
    logo = models.ImageField(upload_to='upload/logo')
    date_created = models.DateField(auto_now_add=True)
    lat = models.FloatField()
    long = models.FloatField()
    
    def __str__(self) -> str:
        return self.organization_name

# class UserManager(EmailAbstractUser):
#     def create_user(self, email,phone,password=None):
       
#         if not email:
#             raise ValueError("Users must have an email address")
        
#         # if not phone:
#         #      raise ValueError("organization must have an phone")

#         user = self.model(
#             email=self.normalize_email(email),
#             phone=phone
#         )

#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email,phone,password=None):
#         """
#         Creates and saves a superuser with the given email, date of
#         birth and password.
#         """
#         user = self.create_user(
#             email,phone=phone,
#             password=password,
#         )
#         user.is_admin = True
#         user.save(using=self._db)
#         return user


class User(EmailAbstractUser):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=13,blank=False)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    # password = models.CharField(max_length=255,)
    ROLE_CHOICES = (
        ('administrator', 'Administrator'),
        ('Doctor', 'Doctor'),
        ('Nurse', 'Nurse'),
    )

    role = models.CharField(max_length=15, choices=ROLE_CHOICES)
    is_active = models.BooleanField(default=True)
    is_nurse = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_admin =  models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now=True)
    objects = EmailUserManager()

    REQUIRED_FIELDS = ["phone"]

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_owner(self):
        return self.is_admin
    

class Ambulance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    organization = models.ForeignKey(Organization,related_name="ambulance",on_delete=models.CASCADE)
    is_available = models.BooleanField(default=False)
    team_phone = models.CharField(max_length=255)
    team_email = models.EmailField()
    
    def __str__(self) -> str:
        return self.is_available
    
    
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name='userprofile') 
    phone = models.CharField(max_length=255)
    bio = models.TextField(blank=True,null=True)
    photo = models.ImageField(upload_to='upload/Doctor_nurse',blank=True,null=True)
    def __str__(self) -> str:
        return  "{}:{}".format(self.user.email)
    
    
class AmbulanceBooking(models.Model):
    fullname = models.CharField(max_length=255)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    booking = models.ForeignKey(Ambulance,on_delete=models.CASCADE,related_name='booking') 
    phone = models.CharField(max_length=255)
    circurmstance = models.TextField()
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return  "{}".format(self.fullname)
    
    
    
    
    

    
    
    
    
    
class Doctor_Nurce_Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE) 
    is_available = models.BooleanField(default=False)
    stafforganization = models.ForeignKey(Organization,on_delete=models.SET_NULL,blank=True, null=True,related_name='stafforganization')
    specialization = models.TextField(blank=True,null=True)
    bio = models.TextField(blank=True,null=True)
    photo = models.ImageField(upload_to='upload/Doctor_nurse',blank=True,null=True)
    
    def __str__(self) -> str:
        return  "{}:{}".format(self.user.role,self.user.first_name)
   
    
   

class PatientAppointment(models.Model):
    ## chocies---------
    GENDERS = [('Female','Female'),('Male','Male')]
    MARITAL_STATUSES = [('Single','Single'),('Married','Married'),
                      ('Widowed','Widowed'),('Divorce','Divorce')]
    
    STATUS_URGENCIES = [("Routine check-up","Routine check-up"),
                      ("Non-urgent medical check-up","Non-urgent medical check-up"),
                      ("Surgical Appointment","Surgical Appointment"),
                      ("Urgent medical check-up","Urgent medical check-up")
                      ]
    APPOINTMENT_TREATMENT_TYPES = [('Cardiovascular Treatment','Cardiovascular Treatment'),
                                  ('Neurological Treatment','Neurological Treatment'),
                                  ('Respiratory Treatment','Respiratory Treatment'),
                                  ('Repair Cosmetic Treatment','Repair Cosmetic Treatment'),
                                   ('Shot Treatment','Shot Treatment'),
                                ('Cosmetic Treatment','Cosmetic Treatment')]
    
    PREFERRED_DAYS_OF_APPOINTMENTS = [('Any day','Any day'),
                                     ('Monday','Monday'),
                                     ('Tuesday','Tuesday'),
                                     ('Wednesday','Wednesday'),
                                     ('Thursday','Thursday'),
                                     ('Friday','Friday')]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    appointments = models.ForeignKey(Organization,on_delete=models.CASCADE,related_name='appointments')
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    requestor_email = models.EmailField()
    title = models.CharField(max_length=255)
    gender = models.CharField(max_length=255,choices=GENDERS)
    marital_status =  models.CharField(max_length=255,choices=MARITAL_STATUSES)
    street_addresss =  models.CharField(max_length=255)
    street_addresss2 =  models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    postal_zipcode =  models.CharField(max_length=255)
    requestor_PhoneNumber = models.CharField(max_length=255)
    ##Medical Information
   
    date_of_birth = models.DateField()
    patient_email = models.EmailField()
    health_insurance = models.TextField("Health Insurance")
    medical_Condition = models.TextField("Patient Medical Condition/History",max_length=255)
    medical_referals = models.TextField(max_length=255)
    
    ## Appointment Details
    appointment_status_urgency = models.CharField(max_length=255,choices=STATUS_URGENCIES)
    preferred_days_of_appointment = models.CharField(max_length=255,choices=PREFERRED_DAYS_OF_APPOINTMENTS)
    time_of_appointment = models.DateTimeField()
    alternative_time_of_appointment = models.DateTimeField()
    appointment_treatment_type = models.CharField(max_length=255,choices=APPOINTMENT_TREATMENT_TYPES),
    staffspatients = models.ForeignKey(Doctor_Nurce_Profile,related_name="staffspatients",on_delete=models.CASCADE,null=True,blank=True)
    
    def __str__(self) -> str:
        return self.patient_email
    
    

    ### --- testing
    
    
    
    

    
    


