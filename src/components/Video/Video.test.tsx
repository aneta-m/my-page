import Video from "./Video";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Video", () => {
  test("renders without errors", () => {
    render(<Video sources={[{ src: "something", type: "video/mp4" }]} />);
    expect(screen.getByTestId("video")).toBeInTheDocument();
  });

  test("starts playing video on click", async () => {
    const playSpy = jest
      .spyOn(HTMLMediaElement.prototype, "play")
      .mockImplementation(async () => {});
    const pauseSpy = jest
      .spyOn(HTMLMediaElement.prototype, "pause")
      .mockImplementation(async () => {});
    render(<Video sources={[{ src: "something", type: "video/mp4" }]} />);
    const videoElement = screen.getByTestId("video") as HTMLMediaElement;
    expect(videoElement.paused).toBe(true);
    const playButton = screen.queryByLabelText(/play video/i);
    expect(playButton).toBeInTheDocument();
    userEvent.click(videoElement);
    expect(playSpy).toHaveBeenCalledTimes(1);
    userEvent.click(videoElement);
    expect(pauseSpy).toHaveBeenCalled();
  });
});
