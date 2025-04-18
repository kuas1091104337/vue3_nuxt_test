import { defineComponent, ref, computed, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "computeSetTest",
  __ssrInlineRender: true,
  setup(__props) {
    const options = ref([{ a: 1 }]), books = ref(["book1：JavaScript", "book2：Vue"]), anotherData = ref("朋友一生一起走"), jpy = ref(0), price = ref(100), discount = ref(0.5), firstName = ref("John"), lastName = ref("Doe"), twd = computed({
      get() {
        return jpy.value * 0.269;
      },
      set(val) {
        jpy.value = val / 0.269;
      }
    }), total = computed({
      get() {
        console.log("觸發 getter!");
        return price.value * discount.value;
      },
      set(newVal) {
        console.log("觸發 setter!");
        discount.value = newVal;
      }
    }), objArr = computed({
      get() {
        return options.value;
      },
      set(newValue) {
        options.value = newValue;
      }
    }), hasBook = computed({
      get() {
        return books.value.length > 0 ? true : false;
      },
      set(val) {
        anotherData.value = "那些日子不再有";
        books.value.length = val;
      }
    }), fullName = computed({
      get() {
        return firstName.value + " " + lastName.value;
      },
      set(newValue) {
        [firstName.value, lastName.value] = newValue.split(" ");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p>${ssrInterpolate(unref(options))}</p><p>${ssrInterpolate(unref(objArr))}</p><button>set</button><h1>${ssrInterpolate(unref(anotherData))}出的書</h1><ul><!--[-->`);
      ssrRenderList(unref(books), (book) => {
        _push(`<li>${ssrInterpolate(book)}</li>`);
      });
      _push(`<!--]--></ul><div>是否還有庫存： ${ssrInterpolate(unref(hasBook))}</div><button>將書本數量歸零</button><p>1 日幣 = 0.269 台幣</p><div>日幣 <input type="text"${ssrRenderAttr("value", unref(jpy))}></div><div>台幣 <input type="text"${ssrRenderAttr("value", unref(twd))}></div><p>定價: ${ssrInterpolate(unref(price))}</p><p>折扣：${ssrInterpolate(unref(discount))}</p><p>折扣價：${ssrInterpolate(unref(total))}</p><button>按此隨機產生折扣</button><p><span>${ssrInterpolate(unref(firstName))}</span> <span>${ssrInterpolate(unref(lastName))}</span></p><p>${ssrInterpolate(unref(fullName))}</p><button>changeName</button><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/computeSetTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=computeSetTest.vue.mjs.map
