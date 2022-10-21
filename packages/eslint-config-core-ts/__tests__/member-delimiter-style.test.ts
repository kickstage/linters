import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = '@typescript-eslint/member-delimiter-style';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig as any,
	rule,
});

const test = suite(rule);

test('should allow multiline semi delimiter', () =>
	validate(`
interface ITestInterface {
    name: string;
    lastName: string;
}
`));

test('should disallow multiline comma delimiter', () =>
	validate(
		`
    interface TestInterface {
        name: string,
    }
    `,
		['Expected a semicolon.']
	));

test('should allow singleline comma delimiter and skipping last', () =>
	validate(`interface ITestInterface { name: string, lastName: string }`));

test('should disallow singleline semi delimiter', () =>
	validate(`interface ITestInterface { name: string; lastName: string; }`, [
		'Expected a comma.',
		'Unexpected separator (;).',
	]));

test.run();
