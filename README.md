# Rollup Config

## Usage

- [x] Be sure to have required `rollup` peer dependency version installed
- [x] `yarn add @live-maker/rollup-config --dev --exact`
- [x] Add the following command in your package.json

```json
"scripts": {
  "build": "rollup --config node:@live-maker/rollup-config",
  "start": "rollup --config node:@live-maker/rollup-config -w"
},
```
