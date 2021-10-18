<template>
  <div
    class="card"
    :class="{ 'as-blank': asBlank, [card.state]: !!card.state }"
    ref="cardRef"
    @click="flipCard"
  >
    <div class="front">
      <p>{{ card.emoji }}</p>
    </div>
    <div class="back">
      <img
        v-if="asBlank"
        class="logo"
        src="@/assets/images/logo.svg"
        alt="vivamemory logo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType,
  Ref,
  ref,
  SetupContext
} from "@vue/runtime-core";

import { ICard } from "../interfaces/interfaces";

interface ISetup {
  flipCard: () => void;
  cardRef: Ref<HTMLDivElement | undefined>;
  cardFontSize: Ref<string>;
}

export default defineComponent({
  name: "Card",

  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true
    },

    asBlank: {
      type: Boolean,
      default: false
    }
  },

  emits: ["flip-card"],

  setup(props, { emit }: SetupContext): ISetup {
    function flipCard() {
      if (!props.asBlank && props.card.state === "inactive") {
        emit("flip-card", props.card);
      }
    }

    const cardRef = ref<HTMLDivElement>();
    const cardFontSize = ref<string>("100px");
    const hasResizeObserver = !!ResizeObserver;

    const resizeObserver = hasResizeObserver
      ? new ResizeObserver(function (entries) {
          const rect = entries[0].contentRect;

          cardFontSize.value = `${(rect.width * 0.55).toFixed(2)}px`;
        })
      : null;

    onMounted(() => {
      cardFontSize.value = `${(cardRef.value!.offsetWidth * 0.55).toFixed(
        2
      )}px`;

      if (resizeObserver) {
        resizeObserver.observe(cardRef.value!);
      }
    });

    onBeforeUnmount(() => {
      if (resizeObserver) {
        resizeObserver.unobserve(cardRef.value!);
      }
    });

    return {
      flipCard,
      cardRef,
      cardFontSize
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
  border-radius: 5px;

  &.as-blank .back {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;

    .logo {
      width: 100%;
      height: auto;
      filter: invert(1);
    }
  }

  &:not(.as-blank) {
    cursor: pointer;

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
      font-size: v-bind("cardFontSize");
    }

    .back {
      background-image: $card-bg-pattern;
      background-color: $card-inactive;
      background-size: $card-bg-pattern-size;
    }

    &.inactive {
      transform: rotateY(0deg) scaleX(-1);

      .front {
        z-index: -1;
      }

      .back {
        z-index: 0;
      }
    }

    &.active,
    &.correct,
    &.incorrect {
      transform: rotateY(180deg) scaleX(-1);

      .front {
        z-index: 1;
      }

      .back {
        z-index: -1;
      }
    }

    &.active {
      background-color: $card-active;
    }

    &.correct {
      background-color: $card-correct;
    }

    &.incorrect {
      background-color: $card-incorrect;
    }
  }
}
</style>
