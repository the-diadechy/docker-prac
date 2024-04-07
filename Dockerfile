FROM node:18-alpine
WORKDIR /app
COPY . .
CMD ["node", "cindy.js","ls -a"]
EXPOSE 3000

