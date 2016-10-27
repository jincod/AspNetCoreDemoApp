## Custom build pack
```
heroku buildpacks:set https://github.com/jincod/dotnetcore-buildpack --index 2
heroku buildpacks:add --index 1 heroku/nodejs
```
## Deploy to Heroku
Click the button below to set up this sample app on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jincod/AspNet5DemoApp)

## Blog posts

- [Deploying ASP.NET Core on heroku](https://jincod.tumblr.com/post/152290263970/deploying-aspnet-core-on-heroku)
- [Integrate ASP.NET 5 and Webpack with Hot Module Replacement plugin](http://jincod.tumblr.com/post/135043543538/integrate-aspnet-5-and-webpack-with-hot-module)
