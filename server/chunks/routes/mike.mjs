import { d as defineEventHandler } from '../nitro/nitro.mjs';
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

const mike = defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 66
  };
  return { data };
});

export { mike as default };
//# sourceMappingURL=mike.mjs.map
