module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				loose: true,
				modules: false,
				targets: {
					chrome: 28,
					safari: 6,
					firefox: 28,
					opera: 32,
					ie: 11,
				},
			},
		],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'babel-plugin-transform-es2015-modules-simple-commonjs',
	],
};
