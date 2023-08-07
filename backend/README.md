# Django (DRF)

[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)

## Полезные команды

### Логи Django

```shell
docker logs -f django
# или
docker compose logs django -f
```

### Миграции

```shell
docker compose run --rm django python manage.py makemigrations
```

```shell
docker compose run --rm django python manage.py migrate
```

*`migrate` делается автоматом при запуске контейнера

### Запуск shell c ipython

```shell
# --name django_shell - чисто для удобства
docker compose run --rm --name django_shell django python manage.py shell -i ipython
```

### Создать бэкап БД

```shell
docker compose exec postgres backup
```

Бэкап создается в `./pg-backups` которая прокинута внутрь контейнера постгреса.

### Посмотреть список бэкапов

```shell
docker compose exec postgres backups
```

### Восстановить из бэкапа

Восстановление работает только из `gzip` бэкапа

```shell
docker compose exec postgres restore backup_2023_05_26T12_34_08.sql.gz
```
