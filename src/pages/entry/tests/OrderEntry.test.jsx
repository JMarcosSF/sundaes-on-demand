import { render, screen, waitFor } from "../../../test-utils/testing-library-utils";
import { Response } from "miragejs";

import OrderEntry from "../OrderEntry";
import { makeServer } from "../../../server";

let server;

beforeEach(() => {
  server = makeServer();
});

afterEach(() => {
  server.shutdown();
});

test("displays image for each scoop from the server", async () => {
  server.get("/scoops", () => {
    return new Response(500, {}, { errors: ["The database went on vacation"] });
  });
  server.get("/toppings", () => {
    return new Response(500, {}, { errors: ["The database went on vacation"] });
  });

  render(<OrderEntry />);
  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });
  // const alerts = await screen.findAllByRole('alert');
  // expect(alerts).toHaveLength(2);
});
