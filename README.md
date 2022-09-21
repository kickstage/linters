# Kickstage JS Linters

ESLint and TSLint configs

## ESLint package dependencies

```mermaid
graph TD;
    eslint-config-core-ts-->eslint-config-core-js;
    eslint-config-react-js-->eslint-config-core-js;
    eslint-config-react-ts-->eslint-config-react-js;
    eslint-config-react-ts-->eslint-config-core-ts;
    eslint-config-nextjs-ts-->eslint-config-react-ts;
    eslint-config-angular-ts-->eslint-config-core-ts;
```

## If you are adding a new package:

- Create a README.md file for the new package
- Run `npm install`
- Run `npx eslint --print-config .eslintrc` and check if the config is correct, especially if you are extending an existing package or adding an external config as a dependency (e.g. the external config might override your rules)

## License

The [MIT License](LICENSE)

## Credits

Maintained by
[Kickstage](https://kickstage.com).

<img src="https://kickstage.com/kstg_logo_email.png" width="264">
