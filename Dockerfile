# Base image
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g yarn
RUN yarn install

COPY . .

RUN yarn build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
