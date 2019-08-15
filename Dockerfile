FROM node:8.11.2-slim

RUN apt-get update && apt-get install git -y

ENV PORT 3000
EXPOSE $PORT

WORKDIR /app
ADD ./package.json ./package.json
RUN npm install

ADD . /app


CMD ["bash","./run.sh"]