// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

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
