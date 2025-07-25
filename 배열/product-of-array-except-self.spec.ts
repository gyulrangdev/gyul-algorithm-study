import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./product-of-array-except-self";

describe("productExceptSelf", () => {
  it("should return the product of the array except self", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("should return the product of the array except self", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });
});
