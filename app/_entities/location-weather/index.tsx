import React from "react";

export default function LocationWeather() {
  return (
    <div className="text-xs flex gap-2 my-1">
      <div className="flex gap-1">
        <span>구름많음</span>
        <span className="font-bold">25˚</span>
        <span>어제보다 1℃ 낮아요</span>
      </div>
      <div className="flex gap-1">
        <span>
          미세
          <span className="text-blue-500 pl-1">좋음</span>
        </span>
        <span>
          초미세
          <span className="text-green-500 pl-1">보통</span>
        </span>
      </div>
    </div>
  );
}
