import { sayHello } from "../say";
test("sayHello", () => {
  expect(sayHello()).toBe("Hello Jest");
});
  