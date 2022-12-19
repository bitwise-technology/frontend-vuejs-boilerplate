import LoginComponent from "@/components/LoginComponent.vue";
import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";

describe("Given LoginComponent", () => {
  expect(LoginComponent).toBeTruthy();

  const wrapper = mount(LoginComponent);

  describe("When inserts a valid email", () => {
    wrapper.get('input[id="user-input"]').setValue("valid_email");

    describe("When inserts a valid password", () => {
      wrapper.get('input[id="password-input"]').setValue("valid_password");

      test("Then login function should be called", () => {
        const spy = vi
          .spyOn(wrapper.vm, "handleLogin")
          .mockImplementation(async () => {});

        wrapper.findComponent("form").trigger("submit");

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
