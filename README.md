# Fullstack template with Django (DRF) + Nuxt3 (SSR/SPA) in Docker

- **Traefik 2.10** - `https` for local development and `Let's Encrypt` in prod
- **Django**, **Postgres** - with custom User model and registration/authentication endpoints (`Djoser` + `SimpleJWT`)
- **DRF** - with swagger (`drf-spectacular`), `django-filter`
- **Celery** - with `celery-beat` and `flower`
- **Redis** - for cache and broker
- **Nuxt 3** - with `SSR` or `SPA` in prod
- **Nginx** - for django media and `SPA`


## Local development

### As separate front and back on custom ports without https

1. Set the variables in `.env`:
    ```env
    COMPOSE_FILE=local.yml
    DOMAIN=localhost  # or your custom domain from etc/hosts
    ```
1. Run `docker compose build` and `docker compose up -d`


### As stack with Traefik on one domain without https

1. Set the variables in `.env`:
    ```env
    COMPOSE_FILE=local.yml:local.traefik.yml
    DOMAIN=localhost  # or your custom domain from etc/hosts
    ```
1. Run `docker compose build` and `docker compose up -d`

Traefik dashboard: http://localhost:8080/dashboard/#/

### As stack with Traefik on one domain with https

1. Add local domain + subdomain for dashboard in `/etc/hosts`:
    ```vim
    127.0.0.1 localhost tpl.local tr.tpl.local
    ```
1. Apply changes:
    ```bash
    sudo killall -HUP mDNSResponder
    ```
1. Install `mkcert` (or another tolls for local certificates)
1. Go to `./compose/local-ssl/traefik/cert/`
1. Generate a wildcard certificate for a local domain:
    ```bash
    mkcert -cert-file tpl.local.pem -key-file tpl.local-key.pem tpl.local "*.tpl.local"  # * for wildcard
    ```
1. Install local CA certificate with the command:
    ```bash
    mkcert -install
    ```
1. Go to `./compose/local-ssl/traefik/dynamic/` and edit `tls.yml`. Change the files names to your own
1. Set the variables in `.env`:
    ```env
    COMPOSE_FILE=local.yml:local.traefik.yml:local.traefik.ssl.yml
    DOMAIN=tpl.local  # or your custom domain from etc/hosts
    ```
1. Run `docker compose build` and `docker compose up -d`

Traefik dashboard: https://tr.tpl.local/dashboard/#/

## Deploy

### SSR-mode

1. Set variables in `.env`:
    - `COMPOSE_FILE=production.yml:production.ssr.yml`
    - `DOMAIN=your_domain.com` - same as your production domain
    - generate new `login:password` for dashboard: `DASHBOARD_LOG_PSW=test:$$apr1$$ozzsQDHl$$wBwHPFJtpA9UQkIE4mXh2/`
1. Run `docker compose build` and `docker compose up -d`
1. If the domain is correctly bound to the server, the certificate will be issued automatically with Let's Encrypt

### SPA-mode with Nginx

...soon

Traefik dashboard: https://tr.your_domain.com/dashboard/#/


## All stack in separate repos:

1. [Traefik 2.10 as revers-proxy in Docker (SSL in dev and prod)](https://github.com/baikov/tpl-traefik)
2. [Nuxt 3 production-ready template in Docker (SPA/SSR)](https://github.com/baikov/tpl-nuxt3)
3. [Django/DRF backend in Docker (based on django-cookiecutter)](https://github.com/baikov/drf-tpl)
