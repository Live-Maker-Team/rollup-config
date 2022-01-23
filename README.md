# Rollup Config

## Usage

- [x] Be sure to have required `rollup` peer dependency version installed
- [x] `yarn add @live-maker-team/rollup-config --dev --exact`
- [x] Add the following command in your package.json

```json
"scripts": {
  "build": "rollup --config node:@live-maker-team/rollup-config",
  "start": "rollup --config node:@live-maker-team/rollup-config -w"
},
```
