import { defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useHomeStore } from './Home.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Btn",
  __ssrInlineRender: true,
  setup(__props) {
    useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-amber-200 border rounded px-2 py-1 ml-4" }, _attrs))}> box btn </button>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=Btn.vue3.mjs.map
