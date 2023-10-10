import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/no-base-to-string';
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

test('should warn about using calling to string on a non-primitive value', () =>
	validate(
		`
    '' + {};
`,
		[],
		["'{}' will evaluate to '[object Object]' when stringified."]
	));

test.run();
