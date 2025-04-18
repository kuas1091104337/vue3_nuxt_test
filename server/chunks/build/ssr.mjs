import { I as setResponseStatus$1 } from '../nitro/nitro.mjs';
import { e as useNuxtApp } from './server.mjs';

function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
function setResponseStatus(arg1, arg2, arg3) {
  if (arg1 && typeof arg1 !== "number") {
    return setResponseStatus$1(arg1, arg2, arg3);
  }
  const event = useRequestEvent();
  if (event) {
    return setResponseStatus$1(event, arg1, arg2);
  }
}

export { useRequestFetch as a, setResponseStatus as s, useRequestEvent as u };
//# sourceMappingURL=ssr.mjs.map
