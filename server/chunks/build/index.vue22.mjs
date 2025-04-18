import { _ as _sfc_main } from './index.vue32.mjs';
import { useSSRContext } from 'vue';
import 'vue/server-renderer';
import './Home.mjs';
import 'pinia';
import './vote.mjs';

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Box/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue22.mjs.map
