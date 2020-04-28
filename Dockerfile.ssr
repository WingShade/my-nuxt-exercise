FROM node:12-alpine
ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm start




