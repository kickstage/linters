import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = 'no-trailing-spaces';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow expressions without whitespace at the end', () => validate(`var test = "whitespace-test";`));

test('should disallow expressions with whitespace at the end', () =>
	validate(`var test = "whitespace-test"; `, ['Trailing spaces not allowed.']));

test.run();
