FROM harbor.rega.gov.sa/docker-hub-rega/nginx:stable

ARG CI_PROJECT_DIR
WORKDIR $CI_PROJECT_DIR

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from $CI_PROJECT_DIR/dist
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
