import React from "react";
import { Color } from "../ui/colors";

interface BadgeProps {
  color: Color;
  info: number;
}
interface BadgeLabel {
  label: "area" | "population";
}

export const Badge = ({ color, label, info }: BadgeProps & BadgeLabel) => {
  return (
    <span className={`badge p-2 ms-2 bg-${color}`}>
      {label}: {info}
    </span>
  );
};
