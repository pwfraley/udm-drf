# UDM-DRF

In diesem Repo tracke ich meine Fortschritte in einem Django DRF Kurs.

## Technische Anforderungen

- python >= 3.11
- postgresql
- Django >= 4.2

## Setup
```bash
cd udm-drf

# Virtuelle Umgebung erstellen damit das System-Python
# unverändert bleibt
python -m venv .venv

# Virtuelle Umgebung aktivieren
source .venv/bin/activate

# Benötigte Module installieren (siehe requirements.txt)
pip install -r requirements.txt

# Django für den ersten Start vorbereiten, dies beinhaltet:

# * Wechseln in das Sourcecode Verzeichnis
cd src

# * Datenbank erstellen und migrieren
python manage.py migrate

# * Admin User anlegen
python manage.py create superuser

# * Django Starten
python manange.py runserver
```

