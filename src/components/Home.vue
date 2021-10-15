<template>
  <div>
    <header>
      <img class="logo" src="@/assets/images/logo.svg" alt="vivamemory logo" />
    </header>

    <main>
      <button class="btn easy" @click="selectLevel('easy')">👶 Fácil</button>
      <button class="btn medium" @click="selectLevel('medium')">
        👦 Normal
      </button>
      <button class="btn hard" @click="selectLevel('hard')">🤯 Difícil</button>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/runtime-core";

import { Difficulties } from "../interfaces/types";

interface ISetup {
  selectLevel: (level: Difficulties) => void;
}

export default defineComponent({
  name: "Home",

  emits: ["level-chosen"],

  setup(_, { emit }: SetupContext): ISetup {
    function selectLevel(level: Difficulties) {
      emit("level-chosen", level);
    }

    return {
      selectLevel
    };
  }
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;

  .logo {
    --margin-top: 50px;
    margin: var(--margin-top) 0 calc(var(--margin-top) * 2);
  }
}

main {
  display: flex;
  flex-direction: column;

  .btn {
    &.easy {
      color: $btn-color-easy;
    }

    &.medium {
      color: $btn-color-medium;
    }

    &.hard {
      color: $btn-color-hard;
    }

    &:hover {
      background-color: $color-gray;
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}
</style>
