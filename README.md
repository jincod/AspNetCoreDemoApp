# ASP.NET Core Demo App

[![Build status](https://ci.appveyor.com/api/projects/status/p3iet9wrmg8jxlmx?svg=true)](https://ci.appveyor.com/project/jincod/aspnet5demoapp)

## Usage

```bash
npm install
dotnet restore
dotnet run -p src/AspNetCoreDemoApp/AspNetCoreDemoApp.csproj
npm start
```

## Deploy to Heroku

### Manual

Using custom buildpack [dotnetcore-buildpack](https://github.com/jincod/dotnetcore-buildpack)

```bash
heroku buildpacks:set https://github.com/jincod/dotnetcore-buildpack
heroku buildpacks:add --index 1 heroku/nodejs
```

[Using Multiple Buildpacks for an App](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app)

### Heroku Deploy button

Click the button below to set up this sample app on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jincod/AspNet5DemoApp)

## Blog posts

- [Deploying ASP.NET Core on heroku](https://jincod.tumblr.com/post/152290263970/deploying-aspnet-core-on-heroku)
- [Integrate ASP.NET 5 and Webpack with Hot Module Replacement plugin](http://jincod.tumblr.com/post/135043543538/integrate-aspnet-5-and-webpack-with-hot-module)
