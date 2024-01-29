FROM --platform=linux/AMD64 node:20-alpine3.17 AS builder
ENV NODE_ENV deployment

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM --platform=linux/AMD64 nginx:1.25.2-alpine-slim
ENV NODE_ENV deployment
# Copy built assets from builder
COPY --from=builder /build /usr/share/nginx/html

# # Add your nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]