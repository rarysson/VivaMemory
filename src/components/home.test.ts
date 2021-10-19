import { shallowMount, VueWrapper } from "@vue/test-utils";

import Home from "./Home.vue";

describe("Home", () => {
  let home: VueWrapper<any>;

  beforeEach(() => {
    home = shallowMount(Home);
  });

  afterEach(() => {
    home.unmount();
  });

  it("should render", () => {
    expect(home.exists()).toBeTruthy();
  });

  it("should emit level-chosen event when clicked on easy btn", () => {
    home.get(".btn.easy").trigger("click");

    const event = home.emitted()["level-chosen"];

    expect(event).toBeTruthy();
    expect(event.length).toBe(1);
    expect(event[0]).toEqual(["easy"]);
  });

  it("should emit level-chosen event when clicked on medium btn", () => {
    home.get(".btn.medium").trigger("click");

    const event = home.emitted()["level-chosen"];

    expect(event).toBeTruthy();
    expect(event.length).toBe(1);
    expect(event[0]).toEqual(["medium"]);
  });

  it("should emit level-chosen event when clicked on hard btn", () => {
    home.get(".btn.hard").trigger("click");

    const event = home.emitted()["level-chosen"];

    expect(event).toBeTruthy();
    expect(event.length).toBe(1);
    expect(event[0]).toEqual(["hard"]);
  });
});
