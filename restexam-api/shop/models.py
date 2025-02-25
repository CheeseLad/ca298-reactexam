from django.db import models


# Create your models here.
class Category(models.Model):
    shortcode = models.CharField(max_length=5, primary_key=True)
    display_name = models.TextField()


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    email = models.EmailField()
    address = models.TextField()


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    shipping_addr = models.TextField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    STATUS_CHOICES = [
        ('O', 'ORDERED'),
        ('P', 'PROCESSING'),
        ('S', 'SHIPPED'),
        ('D', 'DELIVERED')
    ]
    status = models.CharField(
        max_length=2,
        choices=STATUS_CHOICES,
        default='O',
    )


class OrderItem(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    def price(self):
        return self.product*self.quantity

