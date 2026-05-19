import { describe, it, expect } from "vitest";
import { Value } from "../value";

describe("Value", () => {
  it("stores data correctly", () => {
    const a = new Value(2);
    expect(a.data).toBe(2);
  });
});

describe("Value", () => {
  it("performs correct arithmetic", () => {
    const a = new Value(2);
    const b = new Value(3);
    const c = a.add(b);
    const d = a.mul(b);
    const e = a.sub(b);
    expect(c.data).toBe(5);
    expect(d.data).toBe(6);
    expect(e.data).toBe(-1);
  });
});

describe("Value", () =>
  it("computes gradients", () => {
    const a = new Value(2);
    const b = new Value(3);

    const c = a.mul(b);

    c.backward();
    expect(c.grad).toBe(1);
    expect(b.grad).toBe(2);
    expect(a.grad).toBe(3);
  }));
