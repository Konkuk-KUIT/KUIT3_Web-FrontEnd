import { fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  it('should add a new product when "Add new product" button is clicked', () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("category..."), {
      target: { value: "Fruits" },
    });
    fireEvent.change(screen.getByPlaceholderText("price..."), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("name..."), {
      target: { value: "Daangn" },
    });
    fireEvent.click(screen.getByText("Add new product"));

    expect(screen.getByText("Daangn")).toBeInTheDocument();
    expect(screen.getByText("10$")).toBeInTheDocument();
  });

  it("should filter products based on search input", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "fruit" },
    });

    const productCells = screen.getAllByRole("cell", {
      name: /^[a-zA-Z가-힣]*$/,
    });
    const isEveryCellIncludesSearchKeyword = productCells.every((cell) => {
      return cell.textContent?.includes("fruit");
    });

    expect(isEveryCellIncludesSearchKeyword).toBeTruthy();
  });

  it('should show only products in stock when "Only show products in stock" checkbox is checked', () => {
    render(<App />);

    const checkboxInput = screen.getByLabelText("Only show products in stock");

    fireEvent.click(checkboxInput);

    const productCells = screen.getAllByRole("cell", {
      name: /^[a-zA-Z가-힣]*$/,
    });

    productCells.forEach((cell) => {
      expect(cell).not.toHaveStyle({ color: "red" });
    });

    expect(checkboxInput).toBeChecked();
  });

  it("should delete a product when the delete button is clicked", () => {
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("category..."), {
      target: { value: "Meat" },
    });
    fireEvent.change(screen.getByPlaceholderText("price..."), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("name..."), {
      target: { value: "steak" },
    });
    fireEvent.click(screen.getByText("Add new product"));

    const productList = screen.getAllByRole("row");
    const productRow = productList.find((row) =>
      row.textContent?.includes("steak")
    );
    const deleteButton = within(productRow!).getByRole("button", {
      name: "삭제",
    });

    fireEvent.click(deleteButton);

    expect(screen.queryByText("steak")).toBeNull();
  });
});