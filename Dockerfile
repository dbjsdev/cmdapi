FROM node:10

# Create application directory
WORKDIR /usr/cmdapi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]