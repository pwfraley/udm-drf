#!/bin/sh

python manage.py migrate --noinput || exit 1
# python manage.py createsuperuser --noinput || exit 1
python manage.py tailwind build
python manage.py collectstatic --noinput
exec "$@"
