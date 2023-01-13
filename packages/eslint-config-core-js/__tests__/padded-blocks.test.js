import { suite } from 'uvu';
import { getTester } from '@kickstage/test-utils';

import eslintConfig from '../index';

const rule = 'padded-blocks';
const { validate } = getTester({
	filePath: __filename,
	eslintConfig: eslintConfig,
	rule,
});

const test = suite(rule);

test('should allow non padded block everywhere', () =>
	validate(`
        if (something) {
            console.log('foo');
        }
        
        class Foo {
            bar() {
                console.log('bar');
            }
        }
        
        switch (foo) {
            case bar: 
                break;
        }
    `));

test('should disallow padded blocks within block statements, function bodies, and class static blocks', () =>
	validate(
		`
        if (something) {
       
            console.log('foo');
        
        }
    `,
		['Block must not be padded by blank lines.', 'Block must not be padded by blank lines.']
	));

test('should disallow padded block within classes', () =>
	validate(
		`
        class Foo {
        
            bar() {
                console.log('bar');
            }
            
        }
    `,
		['Block must not be padded by blank lines.', 'Block must not be padded by blank lines.']
	));

test('should disallow padded block within switches', () =>
	validate(
		`
        switch (foo) {
        
            case bar: 
                break;
        
        }
    `,
		['Block must not be padded by blank lines.', 'Block must not be padded by blank lines.']
	));

test.run();
