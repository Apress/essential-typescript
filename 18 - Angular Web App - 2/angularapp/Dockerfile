FROM node:12.0.0

RUN mkdir -p /usr/src/angularapp

COPY dist /usr/src/angularapp/dist/
COPY data.json /usr/src/angularapp/
COPY server.js /usr/src/angularapp/
COPY deploy-package.json /usr/src/angularapp/package.json

WORKDIR /usr/src/angularapp

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4001

CMD ["node", "server.js"]
