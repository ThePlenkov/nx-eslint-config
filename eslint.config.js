import typescript from '@nx/eslint-plugin/typescript.js'
import { configs } from 'typescript-eslint';

export default [...typescript.configs.javascript,...typescript.configs.typescript];