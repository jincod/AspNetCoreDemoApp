FROM microsoft/dotnet:1.1.1-runtime
COPY build .
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "AspNetCoreDemoApp.dll"]