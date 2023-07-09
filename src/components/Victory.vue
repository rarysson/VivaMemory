<template>
  <div data-test="victory-component">
    <header>
      <span class="icon">✅</span>
      <h1 class="title">Congrats! You won!</h1>
      <p class="subtitle">With {{ steps }} {{ stepsLabel }}</p>
    </header>

    <main>
      <button class="btn" @click="replay">Replay</button>
    </main>

    <footer>
      <img class="logo" src="@/assets/images/logo.svg" alt="vivamemory logo" />
    </footer>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  SetupContext
} from "@vue/runtime-core";

interface ISetup {
  stepsLabel: ComputedRef<string>;
  replay: () => void;
}

export default defineComponent({
  name: "Victory",

  props: {
    steps: {
      type: Number,
      required: true
    }
  },

  emits: ["replay"],

  setup(props, { emit }: SetupContext): ISetup {
    const stepsLabel = computed<string>(() =>
      props.steps === 1 ? "step" : "steps"
    );

    function replay(): void {
      emit("replay");
    }

    return {
      stepsLabel,
      replay
    };
  }
});
</script>

<style lang="scss" scoped>
header {
  margin-top: 50px;
  margin-bottom: 25px;
  text-align: center;

  .icon {
    display: block;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .title,
  .subtitle {
    color: $color-white;
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1rem;
  }
}

main {
  margin-bottom: 75px;
}

footer {
  display: flex;
  justify-content: center;
}
</style>
