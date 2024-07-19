FROM node:21.6.0-alpine AS base
WORKDIR /app

ARG ENVIRONMENT=production

# Copy project source code
COPY *.json ./
COPY yarn.lock ./
#COPY .env.${ENVIRONMENT} ./.env.${ENVIRONMENT}
COPY src ./src
COPY public ./public
COPY .eslintignore ./
COPY .eslintrc ./
COPY index.html ./
COPY *.js ./
COPY *.ts ./
# Install app dependencies & build the project
RUN yarn install
RUN yarn build:${ENVIRONMENT}

#Copy built project to nginx
FROM nginx:mainline-alpine3.18-slim AS runtime
WORKDIR /app
COPY --from=base /app/build/ /usr/share/nginx/html
