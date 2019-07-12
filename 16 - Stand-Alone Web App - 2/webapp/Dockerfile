FROM node:12.0.0

RUN mkdir -p /usr/src/webapp

COPY dist /usr/src/webapp/dist
COPY assets /usr/src/webapp/assets

COPY data.json /usr/src/webapp/
COPY server.js /usr/src/webapp/
COPY deploy-package.json /usr/src/webapp/package.json

WORKDIR /usr/src/webapp

RUN echo 'package-lock=false' >> .npmrc
RUN npm install

EXPOSE 4000

CMD ["node", "server.js"]
