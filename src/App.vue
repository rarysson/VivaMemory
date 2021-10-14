<template>
  <component :is="state.currentComponent" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import Home from "./components/Home.vue";

type Components = "Home";

type State = {
  currentComponent: Components;
};

interface ISetup {
  state: State;
}

export default defineComponent({
  name: "App",

  components: {
    Home
  },

  setup(): ISetup {
    const state = reactive<State>({
      currentComponent: "Home"
    });

    return {
      state
    };
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100vh;
  background-image: $background;
}

body {
  display: grid;
  place-items: center;
}

button {
  font-family: inherit;
  cursor: pointer;
}
</style>
