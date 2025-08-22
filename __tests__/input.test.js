import { filterName } from "../input";

test("returns the name", () => {
  expect(filterName("Abdelrahman")).toBe("Abdelrahman");
});
test("removes leading and trailing whitespace", () => {
  expect(filterName(" Abdelrahman ")).toBe("Abdelrahman");
});
test("removes leading and trailing underscores", () => {
  expect(filterName("_Abdelrahman_")).toBe("Abdelrahman");
});
test("name > 14", () => {
  expect(filterName("Abdelrahman_Alaa_Mohamed")).toBe("Abdelrahman_Al");
});
