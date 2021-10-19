import { shallowMount, VueWrapper, mount } from "@vue/test-utils";

import Card from "./Card.vue";

describe("Card", () => {
  let card: VueWrapper<any>;
  const cardProp = {
    emoji: "random",
    state: "inactive",
    key: "random"
  };

  beforeEach(() => {
    card = shallowMount(Card, {
      props: {
        card: cardProp
      }
    });
  });

  afterEach(() => {
    card.unmount();
  });

  it("should render", () => {
    expect(card.exists()).toBeTruthy();
  });

  it("should emit flip-card event when click on card", () => {
    card.get(".card").trigger("click");

    expect(card.emitted()["flip-card"]).toBeTruthy();
    expect(card.emitted()["flip-card"].length).toBe(1);
    expect(card.emitted()["flip-card"][0]).toEqual([cardProp]);
  });

  it("should not render img tag when card is not blank", () => {
    card = mount(Card, {
      props: {
        card: cardProp
      }
    });

    expect(card.find("img").exists()).toBeFalsy();
  });

  it("should not emit flip-card event when click on card that is blank", () => {
    card = shallowMount(Card, {
      props: {
        card: cardProp,
        asBlank: true
      }
    });

    card.get(".card").trigger("click");

    expect(card.emitted()["flip-card"]).toBeFalsy();
  });

  it("should render img tag when card is blank", () => {
    card = mount(Card, {
      props: {
        card: cardProp,
        asBlank: true
      }
    });

    expect(card.find("img").exists()).toBeTruthy();
  });
});
