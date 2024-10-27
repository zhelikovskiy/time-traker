// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-plugin-prettier');

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: 'var', next: '*' },
				{ blankLine: 'always', prev: 'let', next: '*' },
				{ blankLine: 'always', prev: 'const', next: '*' },
			],
		},
		plugins: {
			prettier: prettier,
		},
	}
);
