# eslint-config-angular-ts

This package provides Kickstage's ESLint Angular [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Quick start

1. Use the Angular CLI to add add `@angular-eslint/schematics`. If you are migrating from TSLint, follow the [migration guide](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint).

   ```sh
   ng add @angular-eslint/schematics
   ```

2. Install the RxJS plugin and Kickstage's config.

   ```sh
   npm install --save-dev eslint-plugin-rxjs @kickstage/eslint-config-angular-ts
   ```

3. Open your project's ESLint config file and add Kickstage's config to the `extends` array for TypeScript files.

   ```json
   {
   	"overrides": [
   		{
   			"files": ["*.ts"],
   			"extends": [
   				"plugin:@angular-eslint/recommended",
   				"plugin:@angular-eslint/template/process-inline-templates",
   				"@kickstage/eslint-config-angular-ts"
   			]
   		}
   	]
   }
   ```

## License

The [MIT License](../LICENSE)

## Credits

Maintained by
[Kickstage](https://kickstage.com).

<img src="https://kickstage.com/kstg_logo_email.png" width="264">
