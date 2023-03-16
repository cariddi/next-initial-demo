FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

RUN yarn build

#USER nextjs / prod user

EXPOSE 3000

CMD [ "yarn", "start" ]