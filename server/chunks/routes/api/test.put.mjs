import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';

const test_put = defineEventHandler((event) => {
  const data = {};
  return { data };
});

export { test_put as default };
//# sourceMappingURL=test.put.mjs.map
