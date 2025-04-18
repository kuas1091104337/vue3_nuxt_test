import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import { p as people } from '../../../_/people.model.mjs';
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

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event), { name, email, age } = body, people$1 = new people({ name, email, age });
  await people$1.save();
  return { success: true, body };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
