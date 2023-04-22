# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Serve the application with a lightweight HTTP server
FROM node:18-alpine
WORKDIR /app
COPY --from=0 /app/build ./build
RUN npm install -g serve
EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
