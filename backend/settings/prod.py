""" Production Settings """

import os
import dj_database_url
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
# SECURITY #
############

DEBUG = bool(os.getenv('DJANGO_DEBUG', ''))

SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', SECRET_KEY)

# Set to your Domain here (eg. 'my.site.domain.com')
ALLOWED_HOSTS = ['*']

LOCKDOWN_ENABLED = True
LOCKDOWN_PASSWORDS = (os.getenv('LOCKDOWN_MASTER_PASSWORD'),)