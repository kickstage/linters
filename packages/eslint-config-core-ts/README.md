# eslint-config-core-ts

This package provides Kickstage's ESLint core TypeScript [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser @kickstage/eslint-config-core-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "@kickstage/eslint-config-core-ts",
   	"overrides": [
   		{
   			"files": ["*.ts"],
   			"parserOptions": {
   				"project": ["./tsconfig.json"]
   			}
   		}
   	],
   	"parser": "@typescript-eslint/parser"
   }
   ```

## License

The [MIT License](../LICENSE)

## Credits

Maintained by
[Kickstage](https://kickstage.com).

<img src="https://kickstage.com/kstg_logo_email.png" width="264">
