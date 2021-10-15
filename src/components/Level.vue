<template>
  <div>
    <header>
      <img class="logo" src="@/assets/images/logo.svg" alt="vivamemory logo" />
    </header>

    <main>
      <div class="level-info">
        <p>{{ state.steps }} {{ stepsLabel }}</p>
        <button>🔄</button>
      </div>

      <div class="cards-container"></div>
    </main>

    <footer>
      <p>Nível:</p>
      <div class="current-level-display" :class="{ [difficulty]: difficulty }">
        {{ levelLabel }}
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  PropType,
  reactive
} from "@vue/runtime-core";

import { Difficulties } from "../interfaces/types";

type State = {
  cards: Array<string>;
  steps: number;
};

interface ISetup {
  state: State;
  stepsLabel: ComputedRef<string>;
  levelLabel: ComputedRef<string>;
}

export default defineComponent({
  name: "Level",

  props: {
    difficulty: {
      type: String as PropType<Difficulties>,
      required: true
    }
  },

  setup(props): ISetup {
    const state = reactive<State>({
      cards: [],
      steps: 0
    });

    const stepsLabel = computed<string>(() =>
      state.steps === 1 ? "movimento" : "movimentos"
    );
    const levelLabel = computed<string>(() =>
      props.difficulty === "easy"
        ? "Fácil - 4"
        : props.difficulty === "medium"
        ? "Normal - 8"
        : "Difícil - 16"
    );

    return {
      state,
      stepsLabel,
      levelLabel
    };
  }
});
</script>

<style lang="scss" scoped>
.logo {
  margin: 50px 0 25px;
}

main {
  width: 80%;

  .level-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p {
      font-weight: bold;
      color: $color-white;
    }

    button {
      border: none;
      background-color: transparent;
      font-size: 1.5rem;
    }
  }

  .cards-container {
    width: 100%;
    height: 210px;
    padding: 10px;
    background-color: $color-white;
    border-radius: 5px;
    box-shadow: 4px 4px 1px $color-black;
  }
}

footer {
  display: flex;
  align-items: center;
  color: $color-white;
  font-size: 1.15rem;
  margin-top: 50px;

  .current-level-display {
    font-weight: bold;
    background-color: $color-white;
    padding: 3px;
    margin-left: 5px;
    border-radius: 5px;

    &.easy {
      color: $btn-color-easy;
    }

    &.medium {
      color: $btn-color-medium;
    }

    &.hard {
      color: $btn-color-hard;
    }
  }
}
</style>
