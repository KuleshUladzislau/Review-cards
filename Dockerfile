# Базовый образ Node.js
FROM node:16-alpine

# Рабочая директория
WORKDIR /app

# Копируем и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем проект
COPY . .

# Собираем проект
RUN npm run build

# Открываем порт
EXPOSE 5173

# Запускаем Vite preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
