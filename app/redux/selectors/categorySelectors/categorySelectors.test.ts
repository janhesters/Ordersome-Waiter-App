import { state } from "../../../config/fixtures";
import { getAllCategoriesNormalizedSelector } from "./categorySelectors";

describe("category selectors", () => {
  describe("getAllCategoriesNormalizedSelector", () => {
    it("should return all categories normalized", () => {
      expect(getAllCategoriesNormalizedSelector(state)).toEqual({
        "category-abc": { category: "food", uuid: "category-abc" },
        "category-def": { category: "drink", uuid: "category-def" }
      });
    });
  });
});
