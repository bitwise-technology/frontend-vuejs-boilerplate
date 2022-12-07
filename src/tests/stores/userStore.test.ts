import { userStore } from "@/stores/userStore";
import type { User } from "@/types";
import { createPinia, setActivePinia } from "pinia";
import { describe, expect, test, vi } from "vitest";

describe("Given userStore", () => {
  setActivePinia(createPinia());

  const store = userStore();

  const providedUser: User = {
    name: "valid_user",
    password: "valid_password",
  };

  describe("When setUserAction has been called with user data", () => {
    const spy = vi.spyOn(store, "setUserAction");

    store.setUserAction(providedUser);

    expect(spy).toHaveBeenCalledOnce();
    test("Then userGetter should return the same user data", () => {
      const storedUser = store.userGetter;

      expect(storedUser).toEqual(providedUser);
    });
  });
});
