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

const test_get = defineEventHandler((event) => {
  const data = {};
  return { data };
});

export { test_get as default };
//# sourceMappingURL=test.get.mjs.map
