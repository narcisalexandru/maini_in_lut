# Dockerfile pentru frontend
FROM node:18 AS base
WORKDIR /app
EXPOSE 5173

# Copiază package.json și package-lock.json înainte de a instala dependințele
COPY package*.json ./
RUN npm install

# Copiază restul fișierelor
COPY . .

# Build și serve
RUN npm run build
CMD ["npm", "run", "dev"]
