import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = 'unused-imports/no-unused-vars';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow unused variables that are rest siblings', () =>
	validate(`
        const data = {name: 'Ljubo', occupation: 'dev'};
        const {name, ...rest} = data;
        console.log(rest);
`));

test('should not allow unused variables', () =>
	validate(
		`
        const unused = "test";
	`,
		[`'unused' is assigned a value but never used. Allowed unused vars must match /^_/u.`]
	));

test.run();
