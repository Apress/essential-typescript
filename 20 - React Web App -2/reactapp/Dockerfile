FROM node:12.0.0

RUN mkdir -p /usr/src/reactapp

COPY build /usr/src/reactapp/build/
COPY data.json /usr/src/reactapp/
COPY server.js /usr/src/reactapp/
COPY deploy-package.json /usr/src/reactapp/package.json

WORKDIR /usr/src/reactapp

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4002

CMD ["node", "server.js"]
