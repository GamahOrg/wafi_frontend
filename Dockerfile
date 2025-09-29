FROM harbor.rega.gov.sa/docker-hub-rega/nginx:stable

ARG CI_PROJECT_DIR
WORKDIR $CI_PROJECT_DIR

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove all files in the default Nginx html directory
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from dist
COPY dist/ /usr/share/nginx/html/


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
