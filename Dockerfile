# Stage 1: Build the Vite app
FROM node:18.18.2-alpine3.18 AS builder

WORKDIR /app

# Copy only package files first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the build with Nginx
FROM nginx:1.25.2-alpine

# Copy the Vite build output to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]