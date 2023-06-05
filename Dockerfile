FROM python:3.11-alpine
LABEL maintainer="fraley.de"

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

RUN apk update && \
    apk upgrade && \
    apk add gettext nodejs npm

COPY requirements.txt /tmp/requirements.txt
COPY ./src /app
COPY ./scripts/entrypoint.sh /entrypoint.sh

WORKDIR /app
EXPOSE 8000

RUN python -m venv /venv && \
    /venv/bin/pip install --no-cache-dir --upgrade pip && \
    /venv/bin/pip install --no-cache-dir -r /tmp/requirements.txt && \
    rm -f /tmp/requirements.txt && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

ENV PATH="/venv/bin:$PATH"
ENV DJANGO_SETTINGS_MODULE='core.settings.settings'
ENV NPM_BIN_PATH=/usr/bin/npm

USER django-user

# VOLUME /app/media/uploads
# VOLUME /app/static

# runs the production server
ENTRYPOINT ["./entrypoint.sh"]
CMD ["gunicorn", "-b", "0.0.0.0:8000", "core.wsgi"]
