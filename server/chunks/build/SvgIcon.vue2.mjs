import { computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

/* empty css              */
const _sfc_main = {
  __name: "SvgIcon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  setup(__props) {
    const props = __props;
    const svgName = computed(() => {
      return props.name.includes("/") ? `#${props.name}` : `#/${props.name}`;
    });
    const svgClass = computed(
      () => props.className ? "svg-icon " + props.className : "svg-icon"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: unref(svgClass),
        "aria-hidden": "true"
      }, _attrs))}><use${ssrRenderAttr("xlink:href", unref(svgName))}${ssrRenderAttr("fill", props.color)}></use></svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/SvgIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=SvgIcon.vue2.mjs.map
