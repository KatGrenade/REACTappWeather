import React from "react";
export default function Clock() {
  const currentTime = new Date();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`
  ];
  let day = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const displayCurrentTime = `${day}, ${hour}:${minutes}`;
  return <p> {displayCurrentTime}</p>;
}
