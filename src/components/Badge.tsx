import React from "react";
import { Color } from "../ui/colors";

type BadgeLabel = "area" | "population";

interface BadgeProps {
  color: Color;
  value: number;
  label: BadgeLabel;
}

export const Badge = ({ color, label, value }: BadgeProps) => {
  return (
    <span className={`badge p-2 ms-2 bg-${color}`}>
      {label}: {value}
    </span>
  );
};
