import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { p as people } from '../../_/people.model.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const people$1 = await people.find();
  return people$1;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
