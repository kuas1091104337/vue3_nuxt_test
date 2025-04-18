import { defineStore } from 'pinia';
import { u as useVoteStore } from './vote.mjs';
import { computed, ref } from 'vue';

const useHomeStore = defineStore("home", () => {
  const voteStote = useVoteStore(), voteToHomeData = computed(() => voteStote.voteData);
  const num = ref(10), subtractNum = () => num.value--;
  return { num, subtractNum, voteToHomeData };
});

export { useHomeStore as u };
//# sourceMappingURL=Home.mjs.map
