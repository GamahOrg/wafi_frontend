
# Stage 1: Build the Angular application
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build -- --configuration development

# Stage 2: Serve the application with Nginx
FROM nginx:stable

# Copy the built application from the previous stage
COPY --from=build /app/dist/wafi /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
# Uncomment the following line if you have a custom nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]