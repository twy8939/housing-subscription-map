import React from "react";

export default async function ApplyHomeListItem({ item }: IApplyHomeListProps) {
  console.log(item);

  return (
    <li className="p-6 border-b space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-md truncate max-w-60">{item.HOUSE_NM}</span>
        <span className="text-xs text-nowrap text-gray-500">
          {item.HOUSE_DTL_SECD_NM}
        </span>
      </div>
      <div className="truncate">
        <span className="text-xs text-gray-700 ">{item.HSSPLY_ADRES}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-xs text-gray-500 border">진행중</span>
        <span className="text-xs text-gray-700">{`${item.RCEPT_BGNDE}~${item.RCEPT_ENDDE}`}</span>
      </div>
      <div className="flex gap-2 items-center">
        <a
          href={item.PBLANC_URL}
          target="_blank"
          className="text-xs text-blue-500"
        >
          상세보기
        </a>
        <span className="bg-gray-300 rounded-full w-[3px] h-[3px]" />
        <a
          href={item.HMPG_ADRES}
          target="_blank"
          className="text-xs text-blue-500"
        >
          홈페이지
        </a>
      </div>
    </li>
  );
}
