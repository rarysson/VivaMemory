<template>
  <div
    class="card"
    :class="{ 'as-blank': asBlank, 'flipped': state.isFlipped }"
    @click="flipCard"
  >
    <div class="front">
      <p>{{ currentEmoji }}</p>
    </div>
    <div class="back"></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  reactive
} from "@vue/runtime-core";

import { emojis } from "../services/emojis";

type State = {
  isFlipped: boolean;
};

interface ISetup {
  state: State;
  currentEmoji: ComputedRef<string>;
  flipCard: () => void;
}

export default defineComponent({
  name: "Card",

  props: {
    emojiIndex: {
      type: Number,
      required: true
    },

    asBlank: {
      type: Boolean,
      default: false
    }
  },

  setup(props): ISetup {
    const state = reactive<State>({
      isFlipped: false
    });

    const currentEmoji = computed<string>(() => emojis[props.emojiIndex]);

    function flipCard() {
      state.isFlipped = !state.isFlipped;
    }

    return {
      state,
      currentEmoji,
      flipCard
    };
  }
});
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 500ms;
  transform-style: preserve-3d;

  &:not(.as-blank) {
    .front,
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    .front {
      background-color: white;
      z-index: -1;
      display: grid;
      place-items: center;
      font-size: clamp(16px, 20vw, 80px);
    }

    .back {
      background-image: $card-bg-pattern;
      background-color: $card-inactive;
      background-size: $card-bg-pattern-size;
      border-radius: 5px;
    }

    &.flipped {
      transform: rotateY(180deg) scaleX(-1);

      .front {
        z-index: 1;
      }

      .back {
        z-index: -1;
      }
    }
  }
}
</style>
