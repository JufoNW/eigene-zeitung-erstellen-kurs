import datetime
from django.db import models
from django.utils import timezone
from django.core.validators import int_list_validator


class Article(models.Model):
    """
    gender field:
    0 - Male
    1 - Female
    2 - Other

    age_group field:
    -1 - Undefined
    0 - Under 18
    1 - Over 18 Under 30
    2 - Over 30 Under 50
    3 - 50+
    """

    pub_date = models.DateTimeField("Datum", default=timezone.now)

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now

    def __str__(self):
        return self.opinion_list

    @classmethod
    def create(cls, opinion_list):
        votum = cls(opinion_list=opinion_list)
        return votum
