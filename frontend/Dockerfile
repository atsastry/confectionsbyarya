# once code is in Docker, how to actually run the program 


# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:19-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
# copying all react dependencies into folder that Google Cloud Services told us to (/usr/src/app), copied from template 
COPY package*.json ./ 

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
# pulls React from the internet (Gets dependencies to local Docker image), think local virtual machine of user who is running website 
RUN npm install --production

# Copy local code to the container image, copying all source code to the local virtual machine 
COPY . ./
# running optimized version of the website, pre translates my react into raw javascript and this is not happening in real time, does this for optimized performance
RUN npm run build 
# now that website is in javascript, install serve command! (npm knows javascript perfectly)
RUN npm install -g serve 

# Run the web service on container startup.
# CMD ["node", "index.js"]
# running serve command 
CMD ["serve", "-s", "build"]
