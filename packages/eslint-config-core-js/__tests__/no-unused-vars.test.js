import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = 'unused-imports/no-unused-imports';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow used imports', () =>
	validate(`
        import test from 'a';
        console.log(test);
`));

test('should not allow unused imports', () =>
	validate(
		`
        import test from 'a';
        import anotherTest from 'b';
        console.log(anotherTest);
	`,
		[`'test' is defined but never used.`]
	));

test.run();
