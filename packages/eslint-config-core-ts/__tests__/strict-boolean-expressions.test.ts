import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/strict-boolean-expressions';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: {
		...(eslintConfig as any),
		parserOptions: {
			...eslintConfig.parserOptions,
			project: './__tests__/tsconfig.json',
		},
	},
	rule,
});

const test = suite(rule);

test('should warn about using number as bool expression', () =>
	validate(
		`
let num: number | undefined = undefined;
if (num) {
  console.log('num is defined');
}
`,
		[],
		['Unexpected nullish value in conditional. The condition is always false.']
	));

test('should warn about using string as bool expression', () =>
	validate(
		`
let str: string | null = null;
if (!str) {
  console.log('str is empty');
}
`,
		[],
		['Unexpected nullish value in conditional. The condition is always false.']
	));

test.run();
