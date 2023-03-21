import DetailsLayout from "./DetailsLayout";
import { render, screen } from "@testing-library/react";

describe("DetailsLayout", () => {
  test("renders with correct text", () => {
    render(
      <DetailsLayout
        text="text"
        list={["first", "second", "third"]}
        links={[
          { name: "link 1", url: "https://link1.com" },
          { name: "link 2", url: "https://link2.com" },
        ]}
      />
    );
    expect(screen.getByText("text")).toBeInTheDocument();
  });

  test("renders list of elements", () => {
    render(
      <DetailsLayout
        text="text"
        list={["first", "second", "third"]}
        links={[
          { name: "link 1", url: "https://link1.com" },
          { name: "link 2", url: "https://link2.com" },
        ]}
      />
    );
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
    expect(screen.getByText("third")).toBeInTheDocument();
  });

  test("renders links with correct hrefs", () => {
    render(
      <DetailsLayout
        text="text"
        list={["first", "second", "third"]}
        links={[
          { name: "link 1", url: "https://link1.com" },
          { name: "link 2", url: "https://link2.com" },
        ]}
      />
    );
    const firstLink = screen.getByRole("link", { name: "link 1" });
    expect(firstLink).toHaveAttribute("href", "https://link1.com");
    const secondLink = screen.getByRole("link", { name: "link 2" });
    expect(secondLink).toHaveAttribute("href", "https://link2.com");
  });
});
