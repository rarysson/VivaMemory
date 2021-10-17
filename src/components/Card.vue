<template>
  <div
    class="card"
    :class="{ 'as-blank': asBlank, [card.state]: !!card.state }"
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
import { defineComponent, PropType, SetupContext } from "@vue/runtime-core";

import { ICard } from "../interfaces/interfaces";

interface ISetup {
  flipCard: () => void;
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

    return {
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
      font-size: clamp(16px, 20vw, 80px);
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
