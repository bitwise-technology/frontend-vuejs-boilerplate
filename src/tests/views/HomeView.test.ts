import HomeView from "@/views/HomeView.vue";
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Given HomeView", () => {
  expect(HomeView).toBeTruthy();

  describe("When HomeView mounted", () => {
    const wrapper = mount(HomeView);

    test("Then LoginComponent should be visible", () => {
      const loginComponent = wrapper.findComponent({ name: "LoginComponent" });

      expect(loginComponent.isVisible());
    });
  });
});
