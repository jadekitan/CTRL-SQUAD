from django.shortcuts import render
from .healthcareserilizer import ChatbotSerializer
# Create your views here.
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework import serializers, status
from drf_spectacular.utils import extend_schema
from .chatbot.bot import augment_prompt

class SummarizerView(GenericAPIView):
    serializer_class = ChatbotSerializer
    #permission_classes = [permissions.IsAuthenticated]
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