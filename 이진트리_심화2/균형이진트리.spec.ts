import { describe, it, expect } from "vitest";
import { isBalanced } from "./균형이진트리";

describe("isBalanced", () => {
  it("should return true", () => {
    expect(isBalanced(null)).toBe(true);
  });
});
