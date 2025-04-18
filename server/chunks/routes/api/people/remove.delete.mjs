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

const remove_delete = defineEventHandler(async (event) => {
  const body = await readBody(event), { _id } = body;
  await people.deleteOne({ _id });
  return { success: true };
});

export { remove_delete as default };
//# sourceMappingURL=remove.delete.mjs.map
