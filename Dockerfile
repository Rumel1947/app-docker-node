# Usamos la imagen oficial de Node.js
FROM node:18

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Instalar nodemon globalmente
RUN npm install -g nodemon

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto en el contenedor
EXPOSE 3000

# Comando para iniciar la aplicación con nodemon
CMD ["nodemon", "--legacy-watch", "index.js"]