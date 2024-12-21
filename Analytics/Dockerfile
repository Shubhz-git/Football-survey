
# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5001
EXPOSE 5001

# Command to run the app
CMD ["node", "analytics.js"]
