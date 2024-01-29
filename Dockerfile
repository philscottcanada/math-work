FROM --platform=linux/AMD64 node:current-alpine3.18
WORKDIR /app
COPY . .
RUN npm install --omit=dev
RUN npm run build
CMD ["npm", "start"]