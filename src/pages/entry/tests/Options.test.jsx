import { render, screen } from "@testing-library/react";

import Options from "../Options";
import { makeServer } from "../../../server";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";

let server;

beforeEach(() => {
    server = makeServer()
})

afterEach(() => {
    server.shutdown()
})

test('displays image for each scoop from the server', async () => {
    makeServer();
    render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping from the server', async () => {
    makeServer();
    render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });

    const toppingImages = await screen.findAllByRole("img", { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    // confirm alt text of images
    const altText = toppingImages.map((element) => element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&M\'s topping', 'Hot Fudge topping']);
});