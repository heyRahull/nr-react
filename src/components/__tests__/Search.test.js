import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer should load on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});

test("Restaurant should load on Home Page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  // console.log(body);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(20);
});
