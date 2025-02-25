from django.urls import path, include
from rest_framework import routers
from . import views
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

router = routers.DefaultRouter()
router.register(r'customer', views.CustomerViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'order', views.OrderViewSet)
router.register(r'orderitem', views.OrderItemViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
]
