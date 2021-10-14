<template>
  <header>
    <img class="logo" src="@/assets/images/logo.svg" alt="vivamemory logo" />
  </header>

  <main>
    <button class="btn easy">👶 Fácil</button>
    <button class="btn medium">👦 Normal</button>
    <button class="btn hard">🤯 Difícil</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home"
});
</script>

<style lang="scss" scoped>
.logo {
  --margin-top: 50px;
  margin: var(--margin-top) 0 calc(var(--margin-top) * 2);
}

main {
  display: flex;
  flex-direction: column;

  .btn {
    --shadow-offset: 4px;
    width: 250px;
    height: 50px;
    border: none;
    border-radius: 7px;
    background-color: $color-white;
    font-weight: bold;
    font-size: 1.25rem;
    box-shadow: var(--shadow-offset) var(--shadow-offset) 1px $color-black;
    transition: all 250ms;

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

    &:active {
      box-shadow: 0 0 1px $color-black;
      transform: translateY(var(--shadow-offset));
    }

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
}
</style>
