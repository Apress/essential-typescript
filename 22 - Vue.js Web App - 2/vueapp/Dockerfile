FROM node:12.0.0

RUN mkdir -p /usr/src/vueapp

COPY dist /usr/src/vueapp/dist/
COPY data.json /usr/src/vueapp/
COPY server.js /usr/src/vueapp/
COPY deploy-package.json /usr/src/vueapp/package.json

WORKDIR /usr/src/vueapp

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4003

CMD ["node", "server.js"]
