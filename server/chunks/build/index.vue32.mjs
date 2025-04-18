import { defineComponent, unref } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import { u as useHomeStore } from './Home.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Box</h1><h2>${ssrInterpolate(unref(store).num)}</h2><!--]-->`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=index.vue32.mjs.map
