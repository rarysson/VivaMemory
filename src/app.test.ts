import { VueWrapper, shallowMount, mount } from "@vue/test-utils";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Level from "./components/Level.vue";
import Victory from "./components/Victory.vue";
import { Difficulties } from "./interfaces/types";

describe("App", () => {
  let app: VueWrapper<any>;

  beforeEach(() => {
    app = shallowMount(App);
  });

  afterEach(() => {
    app.unmount();
  });

  it("should render", () => {
    expect(app.exists()).toBeTruthy();
  });

  it("should change level", () => {
    const level: Difficulties = "medium";
    const initialLevel = app.vm.state.currentLevel;

    app.findComponent(Home).vm.$emit("level-chosen", level);

    expect(initialLevel).not.toBe(app.vm.state.currentLevel);
    expect(app.vm.state.currentLevel).toBe(level);
  });

  it("should replay a game", async () => {
    app = mount(App);

    app.vm.state.currentComponent = "Victory";

    await app.vm.$nextTick();

    app.findComponent(Victory).get("button").trigger("click");

    expect(app.vm.state.currentComponent).toBe("Home");
  });

  it("should change to the victory stage", async () => {
    app = mount(App);

    app.vm.state.currentComponent = "Level";

    await app.vm.$nextTick();

    app.findComponent(Level).vm.$emit("victory", 30);

    await app.vm.$nextTick();

    expect(app.get(".title").text()).toBe("Parabéns! Você conseguiu!");
    expect(app.findComponent(Victory).props().steps).toBe(30);
  });
});
