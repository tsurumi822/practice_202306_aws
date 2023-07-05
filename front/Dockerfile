FROM --platform=linux/x86_64 node:16

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]