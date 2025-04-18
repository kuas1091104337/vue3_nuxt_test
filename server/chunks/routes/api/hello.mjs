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

const hello = defineEventHandler((event) => {
  const data = {
    name: "mike",
    age: 12
  };
  return { data };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
