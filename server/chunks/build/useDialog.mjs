import { ref, reactive } from 'vue';

const dialogData = reactive({
  title: "",
  content: "",
  confirm: {
    btnName: "",
    onComplete: () => {
    }
  },
  cancel: {
    btnName: "",
    onComplete: () => {
    }
  }
});
const useDialog = () => {
  const dialogRef = ref(null);
  const testData = reactive({
    title: "",
    content: "",
    confirm: {
      btnName: "",
      onComplete: () => {
      }
    },
    cancel: {
      btnName: "",
      onComplete: () => {
      }
    }
  });
  const open = (option) => {
    if (option) {
      dialogData.title = option.title || "預設 title";
      dialogData.content = option.content || "預設 content";
      dialogData.confirm.btnName = option.confirm.btnName || "O";
      dialogData.confirm.onComplete = option.confirm.onComplete;
      dialogData.cancel.btnName = option.cancel.btnName || "X";
      dialogData.cancel.onComplete = option.cancel.onComplete;
      testData.title = option.title || "預設 title";
      testData.content = option.content || "預設 content";
      testData.confirm.btnName = option.confirm.btnName || "O";
      testData.confirm.onComplete = option.confirm.onComplete;
      testData.cancel.btnName = option.cancel.btnName || "X";
      testData.cancel.onComplete = option.cancel.onComplete;
    }
    dialogRef.value.showModal();
  }, close = (type) => {
    if (!!dialogData[type].onComplete) dialogData[type].onComplete();
    if (!!testData[type].onComplete) testData[type].onComplete();
    dialogRef.value.close();
  };
  return { testData, open, close };
};

export { dialogData as d, useDialog as u };
//# sourceMappingURL=useDialog.mjs.map
