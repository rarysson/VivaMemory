<template>
  <transition name="change-component" mode="out-in">
    <component
      :is="state.currentComponent"
      :steps="state.steps"
      @level-chosen="handleLevelChosen"
      @replay="replay"
    />
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import Home from "./components/Home.vue";
import Victory from "./components/Victory.vue";

type Components = "Home" | "Victory";

type State = {
  currentComponent: Components;
  steps: number;
};

interface ISetup {
  state: State;
  handleLevelChosen: () => void;
  replay: () => void;
}

export default defineComponent({
  name: "App",

  components: {
    Home,
    Victory
  },

  setup(): ISetup {
    const state = reactive<State>({
      currentComponent: "Home",
      steps: 0
    });

    function handleLevelChosen() {
      state.currentComponent = "Victory";
    }

    function replay(): void {
      state.currentComponent = "Home";
      state.steps = 0;
    }

    return {
      state,
      handleLevelChosen,
      replay
    };
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import "~@/assets/scss/btn";

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

#app {
  display: grid;
  place-items: center;
}

button {
  font-family: inherit;
  cursor: pointer;
}

.change-component-enter-active,
.change-component-leave-active {
  transition: all 250ms;
}

.change-component-enter,
.change-component-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
</style>
