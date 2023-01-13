import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = 'sort-imports';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow alphabetically sorted imports', () =>
	validate(`
        import a from 'b';
        import b from 'a';
    `));

test('should disallow randomly ordered imports', () =>
	validate(
		`
        import { foo } from "bar";
        import c from 'b';
        import g from 'a';
        import a from 'b';
    `,
		['Imports should be sorted alphabetically.', 'Imports should be sorted alphabetically.']
	));

test.run();
