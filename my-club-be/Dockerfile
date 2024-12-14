# Dockerfile para o back-end
FROM node:18

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos necessários
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código do projeto
COPY . .

# Exponha a porta do servidor
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["npm", "start"]
