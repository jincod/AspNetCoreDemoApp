FROM microsoft/aspnetcore-build:2.0.0-preview2 AS builder
WORKDIR /source

COPY . .
RUN dotnet restore
RUN dotnet publish --output /app/ --configuration Release

FROM microsoft/aspnetcore:2.0.0-preview2
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["dotnet", "AspNetCoreDemoApp.dll"]