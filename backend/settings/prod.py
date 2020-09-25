""" Production Settings """

import os

from sentry_sdk.integrations.django import DjangoIntegration
import dj_database_url
import sentry_sdk

from .dev import *

############
# DATABASE #
############
DATABASES = {
    'default': dj_database_url.config(
        default=os.getenv('DATABASE_URL')
    )
}

############
# SNETRY   #
############


SENTRY_DSN = os.getenv('SENTRY_DSN', '')

sentry_sdk.init(
    dsn=SENTRY_DSN,
    integrations=[DjangoIntegration()],
)

############
# SECURITY #
############

DEBUG = bool(os.getenv('DJANGO_DEBUG', ''))

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', SECRET_KEY)

# Set to your Domain here (eg. 'my.site.domain.com')
ALLOWED_HOSTS = ['*']
