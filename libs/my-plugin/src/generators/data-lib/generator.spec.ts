import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { MyPluginGeneratorSchema } from './schema';

describe('my-plugin generator', () => {
  let appTree: Tree;
  const options: MyPluginGeneratorSchema = { name: 'test-lib', entity: 'my-entity' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
    appTree.write('.gitignore', '');
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test-lib');
    expect(config).toBeDefined();

    const generated = `${config.sourceRoot}/lib/my-entity.ts`;
    const content = appTree.read(generated, 'utf-8');
    expect(content).toContain(`class MyEntity`);
  });
});
