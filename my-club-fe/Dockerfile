# Dockerfile para o front-end
FROM node:18

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos necessários
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código do projeto
COPY . .

# Crie a build do React
RUN npm run build

# Use nginx para servir a aplicação
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Exponha a porta
EXPOSE 80
