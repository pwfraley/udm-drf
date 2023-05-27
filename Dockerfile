FROM python:3.11

RUN apt update && apt install -y libmagic1 libmagic-dev libmagic-mgc libmagic-ocaml libfile-libmagic-perl gettext
RUN pip install --upgrade pip

# Allows docker to cache installed dependencies between builds
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Mounts the application code to the image
COPY ./src app
COPY ./scripts/entrypoint.sh app
WORKDIR /app
RUN mkdir -p media/uploads
RUN chmod -R 777 media/uploads
RUN chmod a+x entrypoint.sh
# For Language Files
# RUN python manage.py compilemessages

EXPOSE 8000
VOLUME /media/uploads
VOLUME /static

# runs the production server
ENTRYPOINT ["./entrypoint.sh"]
ENV DJANGO_SETTINGS_MODULE='udmdrf.settings.settings'
CMD ["gunicorn", "-b", "0.0.0.0:8000", "udmdrf.wsgi"]
