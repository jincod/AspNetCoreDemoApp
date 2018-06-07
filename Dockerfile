FROM node:8.9.4-alpine as node
WORKDIR /app
COPY package.json .
COPY src ./src
COPY public ./public
RUN npm install --progress=true --loglevel=silent
RUN npm run build

FROM microsoft/dotnet:2.1-sdk-alpine AS builder
ENV IS_DOCKER_ENV=true
WORKDIR /source
COPY . .
RUN dotnet restore
RUN dotnet publish --output /app/ --configuration Release

FROM microsoft/dotnet:2.1-aspnetcore-runtime-alpine
WORKDIR /app
COPY --from=builder /app .
COPY --from=node /app/build ./wwwroot
ENTRYPOINT ["dotnet", "AspNetCoreDemoApp.dll"]