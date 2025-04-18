import { ref, computed, defineComponent, h, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { e as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './index.vue33.mjs';
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
import 'devalue';
import 'unhead/plugins';
import '@iconify/vue';
import 'v-calendar';
import 'dayjs';
import './useDialog.mjs';

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = (opts2 = {}) => {
    error.value = false;
    set(0, opts2);
  };
  function set(at = 0, opts2 = {}) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish({ force: opts2.force });
    }
    progress.value = at < 0 ? 0 : at;
    opts2.force ? 0 : throttle;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator || (nuxtApp._loadingIndicator = createLoadingIndicator(opts));
  return indicator;
}

const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const isLoading = ref(false);
    nuxtApp.hook("page:start", () => {
      isLoading.value = true;
    });
    nuxtApp.hook("page:finish", () => {
      isLoading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Dialog = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full pt-[46px]" }, _attrs))}><p style="${ssrRenderStyle(unref(isLoading) ? null : { display: "none" })}" class="text-white text-center bg-amber-400">${ssrInterpolate(unref(isLoading))} - LOADING... </p>`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
        color: "#f00",
        height: 30,
        throttle: 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-white"${_scopeId}>LOADING...</p>`);
          } else {
            return [
              createVNode("p", { class: "text-white" }, "LOADING...")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header class="w-full bg-emerald-300 flex gap-3 overflow-auto p-2 absolute top-0 left-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` home `);
          } else {
            return [
              createTextVNode(" home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` about `);
          } else {
            return [
              createTextVNode(" about ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/user"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` user `);
          } else {
            return [
              createTextVNode(" user ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/apiTest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` apiTest `);
          } else {
            return [
              createTextVNode(" apiTest ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/game"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` game `);
          } else {
            return [
              createTextVNode(" game ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/courses"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` courses `);
          } else {
            return [
              createTextVNode(" courses ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/vote"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` vote `);
          } else {
            return [
              createTextVNode(" vote ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/apiCORS"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` apiCORS `);
          } else {
            return [
              createTextVNode(" apiCORS ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/i18n"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` i18n `);
          } else {
            return [
              createTextVNode(" i18n ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/mongodb"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` mongodb `);
          } else {
            return [
              createTextVNode(" mongodb ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/dialogTest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dialogTest `);
          } else {
            return [
              createTextVNode(" dialogTest ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/computeSetTest"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` computeSetTest `);
          } else {
            return [
              createTextVNode(" computeSetTest ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/vip"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` vip `);
          } else {
            return [
              createTextVNode(" vip ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` login `);
          } else {
            return [
              createTextVNode(" login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-amber-300 px-2",
        to: "/githubRepo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` githubRepo `);
          } else {
            return [
              createTextVNode(" githubRepo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Dialog, null, null, _parent));
      _push(`<footer class="bg-emerald-300 px-2 py-1">456</footer></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default.vue.mjs.map
