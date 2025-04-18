import { j as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
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
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'vue/server-renderer';
import 'devalue';
import 'unhead/plugins';
import '@iconify/vue';
import 'v-calendar';
import 'dayjs';

const auth2 = defineNuxtRouteMiddleware((to, from) => {
  console.log("auth2");
});

export { auth2 as default };
//# sourceMappingURL=auth2.mjs.map
