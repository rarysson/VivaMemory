import { shallowMount, VueWrapper } from "@vue/test-utils";

import Victory from "./Victory.vue";

describe("Victory", () => {
  let victory: VueWrapper<any>;

  beforeEach(() => {
    victory = shallowMount(Victory, {
      props: {
        steps: 0
      }
    });
  });

  afterEach(() => {
    victory.unmount();
  });

  it("should render", () => {
    expect(victory.exists()).toBeTruthy();
  });

  it("should display steps text correctly", () => {
    expect(victory.get(".subtitle").text()).toBe("Com 0 movimentos");

    victory.unmount();
    victory = shallowMount(Victory, {
      props: {
        steps: 1
      }
    });

    expect(victory.get(".subtitle").text()).toBe("Com 1 movimento");

    victory.unmount();
    victory = shallowMount(Victory, {
      props: {
        steps: 37
      }
    });

    expect(victory.get(".subtitle").text()).toBe("Com 37 movimentos");
  });

  it("should emit replay event", () => {
    victory.get("button").trigger("click");

    const event = victory.emitted()["replay"];

    expect(event).toBeTruthy();
    expect(event.length).toBe(1);
  });
});
