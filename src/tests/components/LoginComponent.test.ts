import LoginComponent from "@/components/LoginComponent.vue";
import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";

describe("Given LoginComponent", () => {
  expect(LoginComponent).toBeTruthy();

  const wrapper = mount(LoginComponent);

  describe("When inserts a valid user", () => {
    wrapper.get('input[id="user-input"]').setValue("valid_user");

    describe("When inserts a valid password", () => {
      wrapper.get('input[id="password-input"]').setValue("valid_password");

      test("Then login function should be called", () => {
        const spy = vi
          .spyOn(wrapper.vm, "navigateToLoginConfirmation")
          .mockImplementation(() => ({}));

        wrapper.get("button").trigger("click");

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
