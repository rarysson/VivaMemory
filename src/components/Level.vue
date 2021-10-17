<template>
  <div class="level">
    <header>
      <img class="logo" src="@/assets/images/logo.svg" alt="vivamemory logo" />
    </header>

    <main>
      <div class="level-info">
        <p>{{ state.steps }} {{ stepsLabel }}</p>
        <button @click="randomizeCards">🔄</button>
      </div>

      <transition-group
        class="cards-container"
        :class="{ [difficulty]: !!difficulty }"
        tag="div"
        name="cards"
      >
        <card
          v-for="card in state.cards"
          :key="card.key"
          :card="card"
          @flip-card="selectCard"
        />
      </transition-group>
    </main>

    <footer>
      <p>Nível:</p>
      <div
        class="current-level-display"
        :class="{ [difficulty]: !!difficulty }"
      >
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
  reactive,
  SetupContext,
  watchEffect
} from "@vue/runtime-core";

import { Difficulties } from "../interfaces/types";
import { ICard } from "../interfaces/interfaces";
import { emojis, totalEmojis } from "../services/emojis";

import Card from "./Card.vue";

type State = {
  cards: Array<ICard>;
  steps: number;
  chosenCards: Array<ICard>;
  correctCards: number;
};

interface ISetup {
  state: State;
  stepsLabel: ComputedRef<string>;
  levelLabel: ComputedRef<string>;
  randomizeCards: () => void;
  selectCard: (card: ICard) => void;
}

export default defineComponent({
  name: "Level",

  props: {
    difficulty: {
      type: String as PropType<Difficulties>,
      required: true
    }
  },

  emits: ["victory"],

  components: {
    Card
  },

  setup(props, { emit }: SetupContext): ISetup {
    const state = reactive<State>({
      cards: [],
      steps: 0,
      chosenCards: [],
      correctCards: 0
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
    const maximumUniqueCards = computed<number>(() =>
      props.difficulty === "easy" ? 2 : props.difficulty === "medium" ? 4 : 8
    );

    function getRandomEmojiIndex(): number {
      return Math.floor(Math.random() * totalEmojis);
    }

    for (let i = 0; i < maximumUniqueCards.value; i++) {
      const emojiIndex = getRandomEmojiIndex();
      const magicNumber = i % maximumUniqueCards.value;

      state.cards.push({
        emoji: emojis[emojiIndex],
        state: "inactive",
        key: `card - ${i + magicNumber}`
      });
      state.cards.push({
        emoji: emojis[emojiIndex],
        state: "inactive",
        key: `card - ${i + magicNumber + 1}`
      });
    }

    function randomizeCards(): void {
      state.chosenCards = [];
      state.steps = 0;
      state.correctCards = 0;
      state.cards.forEach((card) => {
        card.state = "inactive";
      });

      let shuffledCards = [...state.cards];
      let currentIndex = shuffledCards.length;
      let randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
          shuffledCards[randomIndex],
          shuffledCards[currentIndex]
        ];
      }

      state.cards = shuffledCards;
    }

    function selectCard(card: ICard): void {
      card.state = "active";
      state.steps++;
      state.chosenCards.push(card);

      if (state.chosenCards.length === 2) {
        const [cardA, cardB] = state.chosenCards;

        if (cardA.emoji === cardB.emoji) {
          cardA.state = "correct";
          cardB.state = "correct";

          setTimeout(() => {
            state.correctCards++;
          }, 1000);
        } else {
          cardA.state = "incorrect";
          cardB.state = "incorrect";

          setTimeout(() => {
            cardA.state = "inactive";
            cardB.state = "inactive";
          }, 2000);
        }

        state.chosenCards = [];
      }
    }

    watchEffect(() => {
      if (state.correctCards === maximumUniqueCards.value) {
        emit("victory", state.steps);
      }
    });

    randomizeCards();

    return {
      state,
      stepsLabel,
      levelLabel,
      randomizeCards,
      selectCard
    };
  }
});
</script>

<style lang="scss" scoped>
.level {
  width: 75%;
}

header {
  text-align: center;

  .logo {
    margin: 50px auto 25px;
  }
}

main {
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
    height: 225px;
    padding: 15px;
    background-color: $color-white;
    border-radius: 5px;
    box-shadow: 4px 4px 1px $color-black;
    display: grid;
    gap: 15px;

    &.easy {
      grid-template-columns: repeat(2, minmax(90px, 1fr));
    }

    &.medium {
      grid-template-columns: repeat(3, minmax(50px, 1fr));
    }

    &.hard {
      grid-template-columns: repeat(4, minmax(30px, 1fr));
    }
  }
}

footer {
  display: flex;
  justify-content: center;
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

.cards-enter-active,
.cards-leave-active {
  transition: all 250ms;
}

.cards-move {
  transition: transform 250ms;
}
</style>