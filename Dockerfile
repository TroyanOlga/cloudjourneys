FROM node:18-alpine3.15

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD [ "npm", "start"]