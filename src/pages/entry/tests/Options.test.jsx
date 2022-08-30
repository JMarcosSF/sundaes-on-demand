import { render, screen} from "@testing-library/react";

import Options from "../Options";
import { makeServer } from "../../../server";

test('displays image for each scoop from the servier', async () => {
    makeServer();
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});