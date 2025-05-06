# Stage 1: Build the Angular application
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Install pnpm first to cache it separately
RUN npm install -g pnpm

# Copy only package manager files first (to maximize cache use)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN pnpm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable

# Remove default nginx static files (optional but clean)
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/wafi/* /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
