import LoginConfirmationComponent from "@/components/LoginConfirmationComponent.vue";
import { describe, expect, test } from "vitest";
import type { User } from "../../types";
import { userStore } from "../../stores/userStore";
import { createPinia, setActivePinia } from "pinia";
import { mount } from "@vue/test-utils";

describe("Given LoginConfirmationComponent", () => {
  expect(LoginConfirmationComponent).toBeTruthy();
  setActivePinia(createPinia());

  test("Should display welcome message with storaged user data", () => {
    const store = userStore();

    const providedUser: User = {
      displayName: "valid_name",
      email: "valid_email",
      idToken: "valid_token",
      localId: "valid_localId",
    };

    store.setUserAction(providedUser);

    const wrapper = mount(LoginConfirmationComponent);
    const spanText = `${wrapper.find("span").text()}`;

    expect(spanText).toEqual("Bem vindo, valid_email!");
  });
});
