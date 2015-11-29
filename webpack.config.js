module.exports = process.env.NODE_ENV === 'production' ?
	require('./webpack/webpack.config.prod') : require('./webpack/webpack.config.dev');