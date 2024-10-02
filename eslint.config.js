import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: 'var', next: '*' },
				{ blankLine: 'always', prev: 'let', next: '*' },
				{ blankLine: 'always', prev: 'const', next: '*' },
			],
		},
	},
];
