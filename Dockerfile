FROM node:10.13.0-alpine as node
WORKDIR /app
COPY public ./public
COPY src/index.js ./src/index.js
COPY package*.json ./
RUN npm install --progress=true --loglevel=silent
COPY src/client ./src/client/
RUN npm run build

FROM microsoft/dotnet:2.1-sdk-alpine AS builder
WORKDIR /source
COPY . .
RUN dotnet restore
RUN dotnet publish -c Release -r linux-musl-x64 -o /app

FROM microsoft/dotnet:2.1-aspnetcore-runtime-alpine
WORKDIR /app
COPY --from=builder /app .
COPY --from=node /app/build ./wwwroot
ENTRYPOINT ["./AspNetCoreDemoApp"]