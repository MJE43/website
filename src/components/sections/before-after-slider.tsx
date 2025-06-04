import type React from "react";
import { useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-background">
      <div className="relative aspect-video">
        {/* After Image (Background) */}
        <img
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Before Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage || "/placeholder.svg"}
            alt={beforeLabel}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg">
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 rounded bg-black/70 px-2 py-1 text-sm text-white">
          {beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-sm text-white">
          {afterLabel}
        </div>
      </div>

      {/* Slider Control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
