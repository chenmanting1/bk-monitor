# Generated by Django 3.2.15 on 2024-10-16 01:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('log_clustering', '0032_clusteringconfig_access_finished'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegexTemplate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, db_index=True, verbose_name='创建时间')),
                ('created_by', models.CharField(default='', max_length=32, verbose_name='创建者')),
                ('updated_at', models.DateTimeField(auto_now=True, db_index=True, null=True, verbose_name='更新时间')),
                ('updated_by', models.CharField(blank=True, default='', max_length=32, verbose_name='修改者')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='是否删除')),
                ('deleted_at', models.DateTimeField(blank=True, null=True, verbose_name='删除时间')),
                ('deleted_by', models.CharField(blank=True, max_length=32, null=True, verbose_name='删除者')),
                ('space_uid', models.CharField(db_index=True, max_length=256, verbose_name='空间唯一标识')),
                ('template_name', models.CharField(db_index=True, max_length=256, verbose_name='模板名称')),
                ('predefined_varibles', models.TextField(verbose_name='模板的正则表达式')),
            ],
            options={
                'verbose_name': '聚类正则模板',
                'verbose_name_plural': '聚类正则模板',
            },
        ),
        migrations.AddField(
            model_name='clusteringconfig',
            name='regex_rule_type',
            field=models.CharField(
                choices=[('customize', '自定义'), ('template', '模板')],
                default='customize',
                max_length=64,
                verbose_name='规则类型',
            ),
        ),
        migrations.AddField(
            model_name='clusteringconfig',
            name='regex_template_id',
            field=models.IntegerField(default=0, verbose_name='模板ID'),
        ),
    ]