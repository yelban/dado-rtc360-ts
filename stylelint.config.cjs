module.exports = {
	extends: [
		//
		'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-config-html/html',
		'stylelint-config-standard-scss',
		'stylelint-config-prettier-scss',
		'stylelint-config-idiomatic-order',
		'stylelint-config-clean-order',
	],
	plugins: ['stylelint-order'],
	rules: {
		// 'color-hex-length': 'long',
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind'],
			},
		],
	},
	overrides: [
		{
			files: ['*.css', '**/*.css', '*.scss', '**/*.scss', '*.less', '**/*.less'],
			rules: {
				'color-hex-case': 'lower',
				'declaration-block-trailing-semicolon': 'always',
				'block-closing-brace-newline-before': 'always',
			},
		},
		{
			files: ['*.stylus', '*.styl', '**/*.stylus', '**/*.styl'],
			extends: ['stylelint-stylus/standard', 'stylelint-config-idiomatic-order', 'stylelint-config-clean-order'],
			plugins: ['stylelint-stylus', 'stylelint-order'],
			rules: {
				// 'stylus/color-hex-case': 'upper',
				'stylus/semicolon': 'never',
			},
		},
	],
};
