import withSolid from "rollup-preset-solid";
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

export default withSolid([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true
      }),
    ],
  },
]);
