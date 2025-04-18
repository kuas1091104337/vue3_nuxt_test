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

const update_put = defineEventHandler(async (event) => {
  const body = await readBody(event), { _id, name } = body, updateData = await people.findOne({ _id });
  await people.updateOne(updateData, { name });
  await updateData.save();
  return { success: true };
});

export { update_put as default };
//# sourceMappingURL=update.put.mjs.map
