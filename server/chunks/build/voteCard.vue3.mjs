import __nuxt_component_0 from './VoteBtn.vue2.mjs';
import { defineComponent, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as useVoteStore } from './vote.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "voteCard",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useVoteStore();
    const { voteData, isFetch } = storeToRefs(store);
    const { addVote } = store;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VoteBtn = __nuxt_component_0;
      _push(`<!--[-->`);
      ssrRenderList(unref(voteData), (item) => {
        _push(`<div class="w-[170px] flex flex-col items-center border border-[#999] rounded-[20px] p-[20px]"><img class="w-[100px] mx-auto"${ssrRenderAttr("src", item == null ? void 0 : item.path)}${ssrRenderAttr("alt", item == null ? void 0 : item.name)}><h1 class="text-[24px] mt-auto">${ssrInterpolate(item == null ? void 0 : item.name)}</h1>`);
        _push(ssrRenderComponent(_component_VoteBtn, {
          onClick: ($event) => unref(addVote)(item == null ? void 0 : item.name)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(isFetch) ? "重新計算中..." : "投票數:" + (item == null ? void 0 : item.count))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(isFetch) ? "重新計算中..." : "投票數:" + (item == null ? void 0 : item.count)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=voteCard.vue3.mjs.map
