import { BuildExecutorSchema } from './schema';
import * as fs from 'fs';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Executor ran for Build', options);
  
  fs.writeFileSync(`${options.folder}/demo.txt`, 'Demo Task!');

  return {
    success: true,
  };
}
