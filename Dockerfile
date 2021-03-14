FROM node:alpine as build

WORKDIR /app

COPY . .

RUN npm ci \
    && npm run build

FROM node:alpine

LABEL maintainer=support@secanis.ch \
    ch.secanis.tool=pulumi-browser

WORKDIR /app
ENV NODE_ENV production

COPY --from=build /app/dist .
COPY package*.json .
COPY ./views ./views

RUN \
    npm ci --production \
    && adduser -D myuser \
    && chown myuser:myuser -R ./
USER myuser

# HEALTHCHECK --interval=15s --timeout=15s --start-period=5s --retries=3 CMD node /app/healthcheck.js

EXPOSE 3000

CMD ["node", "main.js"]
