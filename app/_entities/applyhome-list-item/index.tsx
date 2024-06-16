import React from "react";

export default async function ApplyHomeListItem({ item }: IApplyHomeListProps) {
  return (
    <li className="p-6 border-b">
      <span className="text-md">{item.HOUSE_NM}</span>
    </li>
  );
}
