import IconList from "./IconList";
import { render, screen } from "@testing-library/react";

describe("IconList", () => {
  test("renders without errors", () => {
    render(<IconList list={[{ imgSrc: "source", text: "text" }]} />);
    expect(screen.getByText("text")).toBeInTheDocument();
  });
  test("renders all items from list", () => {
    render(
      <IconList
        list={[
          { imgSrc: "source", text: "1" },
          { imgSrc: "source", text: "2" },
          { imgSrc: "source", text: "3" },
          { imgSrc: "source", text: "4" },
          { imgSrc: "source", text: "5" },
        ]}
      />
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });
  test("renders items with icon", () => {
    render(<IconList list={[{ icon: <i>icon</i>, text: "text" }]} />);
    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
  });
  test("renders items with image path", () => {
    const imgSrc = "path/to/image.png";
    render(<IconList list={[{ imgSrc: imgSrc, text: "text" }]} />);
    expect(screen.getByText("text")).toBeInTheDocument();
    expect(screen.getByAltText("text")).toBeInTheDocument();
  });
  test("image has class img_top if align = top passed", () => {
    const imgSrc = "path/to/image.png";
    render(
      <IconList
        list={[
          { imgSrc: imgSrc, text: "text" },
          { imgSrc: imgSrc, text: "top-aligned", align: "top" },
        ]}
      />
    );
    expect(screen.getByAltText("top-aligned")).toHaveClass("img_top");
  });
});
