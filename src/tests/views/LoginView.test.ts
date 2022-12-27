import LoginView from "@/views/LoginView.vue";
import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

describe("Given LoginView", () => {
  expect(LoginView).toBeTruthy();

  describe("When LoginView mounted", () => {
    const wrapper = mount(LoginView);

    test("Then LoginComponent should be visible", () => {
      const loginComponent = wrapper.findComponent({ name: "LoginComponent" });

      expect(loginComponent.isVisible());
    });
  });
});
