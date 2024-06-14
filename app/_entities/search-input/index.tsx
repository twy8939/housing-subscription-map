import Input from "@/app/_ui/input";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <>
      <Input
        placeholder="지역, 지하철, 학교 검색"
        leftContent={<FaSearch color="blue" className="mx-1" />}
      />
    </>
  );
}
