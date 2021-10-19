import { shallowMount, VueWrapper, mount } from "@vue/test-utils";

import Level from "./Level.vue";
import Card from "./Card.vue";
import { ICard } from "@/interfaces/interfaces";

jest.useFakeTimers();

describe("Level", () => {
  let level: VueWrapper<any>;

  beforeEach(() => {
    level = shallowMount(Level, {
      props: {
        difficulty: "easy"
      }
    });
  });

  afterEach(() => {
    level.unmount();
  });

  it("should render", () => {
    expect(level.exists()).toBeTruthy();
  });

  it("should render easy level correctly", () => {
    level = mount(Level, {
      props: {
        difficulty: "easy"
      }
    });

    expect(level.get(".current-level-display").text()).toBe("Fácil - 4");
    expect(level.findAll(".card").length).toBe(4);
  });

  it("should render medium level correctly", () => {
    level = mount(Level, {
      props: {
        difficulty: "medium"
      }
    });

    expect(level.get(".current-level-display").text()).toBe("Normal - 8");
    expect(level.findAll(".card").length).toBe(9);
    expect(level.findAll(".as-blank").length).toBe(1);
  });

  it("should render medium level correctly", () => {
    level = mount(Level, {
      props: {
        difficulty: "hard"
      }
    });

    expect(level.get(".current-level-display").text()).toBe("Difícil - 16");
    expect(level.findAll(".card").length).toBe(16);
  });

  it("should emit victory event", async () => {
    level.vm.state.correctCards = 2;
    level.vm.state.steps = 20;

    await level.vm.$nextTick();

    const event = level.emitted()["victory"];

    expect(event).toBeTruthy();
    expect(event.length).toBe(1);
    expect(event[0]).toEqual([20]);
  });

  it("should randomize cards", async () => {
    const initialCards = [...level.vm.state.cards];

    level.get("button").trigger("click");

    await level.vm.$nextTick();

    expect(level.vm.state.cards).not.toEqual(initialCards);
  });

  it("should handle when the user select a card", () => {
    level = mount(Level, {
      props: {
        difficulty: "easy"
      }
    });

    const card: ICard = {
      emoji: "",
      key: "",
      state: "inactive"
    };

    level.findComponent(Card).vm.$emit("flip-card", card);

    expect(level.vm.state.chosenCards.length).toBe(1);
    expect(level.vm.state.steps).toBe(1);
  });

  it("should handle when the user select 2 card that are equal", () => {
    level = mount(Level, {
      props: {
        difficulty: "easy"
      }
    });

    const card: ICard = {
      emoji: "",
      key: "",
      state: "inactive"
    };

    level.findComponent(Card).vm.$emit("flip-card", card);

    expect(level.vm.state.chosenCards.length).toBe(1);
    expect(level.vm.state.steps).toBe(1);

    level.findComponent(Card).vm.$emit("flip-card", card);

    jest.runAllTimers();

    expect(level.vm.state.chosenCards.length).toBe(0);
    expect(level.vm.state.steps).toBe(2);
    expect(level.vm.state.correctCards).toBe(1);
  });

  it("should handle when the user select 2 card that are not equal", () => {
    level = mount(Level, {
      props: {
        difficulty: "easy"
      }
    });

    const card: ICard = {
      emoji: "",
      key: "",
      state: "inactive"
    };

    level.findComponent(Card).vm.$emit("flip-card", card);

    expect(level.vm.state.chosenCards.length).toBe(1);
    expect(level.vm.state.steps).toBe(1);

    level
      .findComponent(Card)
      .vm.$emit("flip-card", { ...card, emoji: "random" });

    jest.runAllTimers();

    expect(level.vm.state.chosenCards.length).toBe(0);
    expect(level.vm.state.steps).toBe(2);
    expect(level.vm.state.correctCards).toBe(0);
  });
});
