FROM deliveryagent/centos7-node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm config set proxy http://10.164.254.20:8080
RUN npm config set https-proxy http://10.164.254.20:8080
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]