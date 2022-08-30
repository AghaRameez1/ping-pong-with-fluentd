FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .


ARG PORT
ENV PORT ${PORT}

EXPOSE ${PORT}

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \  
    CMD node healthcheck.js

CMD ["node","app.js"]
