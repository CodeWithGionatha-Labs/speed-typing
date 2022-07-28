import { calculateAccuracyPercentage, findDifferences } from "../helpers";

describe("Helpers functions", () => {
  describe("Calculate Accuracy", () => {
    it("should return 0", () => {
      expect(calculateAccuracyPercentage(10, 10)).toBe(0);
      expect(calculateAccuracyPercentage(0, 0)).toBe(0);
    });

    it("should return 30", () => {
      const accuracy = calculateAccuracyPercentage(7, 10);
      expect(accuracy).toBe(30);
    });

    it("should return 50", () => {
      const accuracy = calculateAccuracyPercentage(1, 2);
      expect(accuracy).toBe(50);
    });

    it("should return 75", () => {
      const accuracy = calculateAccuracyPercentage(1, 4);
      expect(accuracy).toBe(75);
    });

    it("should return 100", () => {
      expect(calculateAccuracyPercentage(0, 10)).toBe(100);
    });
  });

  describe("Count Errors", () => {
    it("should count 0 errors", () => {
      expect(findDifferences("", "")).toBe(0);
      expect(findDifferences("test", "test")).toBe(0);
      expect(findDifferences("very long TEXT", "very long TEXT")).toBe(0);
    });

    it("should count 1 error", () => {
      expect(findDifferences("a", "b")).toBe(1);
      expect(findDifferences("test", "Test")).toBe(1);
      expect(findDifferences("", " ")).toBe(1);
    });

    it("should count 2 error", () => {
      expect(findDifferences("aa", "bb")).toBe(2);
      expect(findDifferences("test", "TesT")).toBe(2);
      expect(findDifferences("", "  ")).toBe(2);
    });

    it("should count 4 error", () => {
      expect(findDifferences("aaaa", "bbbb")).toBe(4);
      expect(findDifferences("test", "TEST")).toBe(4);
      expect(findDifferences("", "    ")).toBe(4);
    });
  });
});

export {};
