from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import ValidationError
from .models import *
from .serializers import *
from django_filters import rest_framework as filters
# Create your views here.


class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerialiser
    permission_classes = [AllowAny]
    model = Customer
    queryset = Customer.objects.all()


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    model = Product
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ['category']
    queryset = Product.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    model = Category
    queryset = Category.objects.all()


class OrderItemViewSet(viewsets.ModelViewSet):
    serializer_class = OrderItemSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ['order']
    queryset = OrderItem.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ['customer', 'status']
    queryset = Order.objects.all()
