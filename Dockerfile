FROM node:alpine

WORKDIR /opt/alunos10-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
