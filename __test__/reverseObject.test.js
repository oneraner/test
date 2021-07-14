const reverseObject = require("../util/reverse");

test("have reverse object", () => {
  expect(reverseObject({})).toBe("error");
  expect(reverseObject("ccc")).toBe("error");
  expect(reverseObject({ a: "b" })).toMatchObject({ b: "a" });
  expect(
    reverseObject({
      hired: {
        be: {
          to: {
            deserve: "I",
          },
        },
      },
    })
  ).toMatchObject({
    I: {
      deserve: {
        to: {
          be: "hired",
        },
      },
    },
  });
});
