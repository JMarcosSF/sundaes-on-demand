import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

// Continue from Lesson 39
test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox enables confirm button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  userEvent.click(checkbox);

  expect(confirmButton).toBeEnabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(/No ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  const teesAndCees = screen.getByText(/terms and conditions/i);
  userEvent.hover(teesAndCees);
  const popover = screen.getByText(/No ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // SOLUTION
  // Warning: An update to Overlay inside a test was not wrapped in act(...)
  userEvent.unhover(teesAndCees);
  await waitForElementToBeRemoved(screen.queryByText(/No ice cream will actually be delivered/i));
  // const nullPopover2 = screen.queryByText(/No ice cream will actually be delivered/i);
  // expect(nullPopover2).not.toBeInTheDocument();
});
