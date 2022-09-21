# eslint-config-nextjs-ts

This package provides Kickstage's ESLint NextJS TypeScript [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

1. Install the required packages:

   ```sh
   npm install --save-dev eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser @kickstage/eslint-config-nextjs-ts
   ```

2. Extend your ESLint config:

   ```json
   {
   	"extends": "@kickstage/eslint-config-nextjs-ts",
   	"overrides": [
   		{
   			"files": ["*.ts", "*.tsx"],
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
