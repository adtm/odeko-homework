FROM node:16.16.0-alpine as builder
WORKDIR /usr/src/app
COPY . . 
RUN npm install
RUN npm run clean
RUN npm run build

FROM node:16.16.0-alpine as prod
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/src/app/dist ./dist 

ARG APP_PORT
EXPOSE ${APP_PORT}
CMD npm start
