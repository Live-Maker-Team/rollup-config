import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import ts from 'rollup-plugin-ts';
import fs from 'fs';
import path from 'path';

const clientRoot = fs.realpathSync(process.cwd());

const inputFile = path.join(clientRoot, 'src', 'index.ts');

const packageJson = path.join(clientRoot, 'package.json');

const {
  dependencies,
  peerDependencies,
  optionalDependencies,
  main,
  module,
} = require(packageJson);

const externalDependencies = [
  ...Object.keys(dependencies ?? {}),
  ...Object.keys(peerDependencies ?? {}),
  ...Object.keys(optionalDependencies ?? {}),
];

export default {
  external: externalDependencies,
  input: path.resolve(clientRoot, 'src', inputFile),
  output: [
    {
      file: path.resolve(clientRoot, main),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(clientRoot, module),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [json(), resolve(), commonjs(), ts({ transpiler: 'babel' })],
};
