# Generated by Django 4.0.3 on 2022-03-03 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_rename_registercreate_register'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
