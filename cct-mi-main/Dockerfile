# ---- Build stage ----
FROM node:20-bookworm AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci || npm install

RUN npx playwright install --with-deps chromium

COPY . .

ARG CCT_MODE=public
ENV CCT_MODE=${CCT_MODE}

ARG VITE_APP_VERSION
ENV VITE_APP_VERSION=${VITE_APP_VERSION}

RUN npm run pdf
RUN npm run build

# ---- Runtime stage ----
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY --from=build /app/.docs-build/dist-site/ /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]