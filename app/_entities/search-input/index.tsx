"use client";

import { useSearchStore } from "@/app/_stores/search";
import Input from "@/app/_ui/input";
import { debounce } from "lodash";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  const { setSearch } = useSearchStore();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearch(value);
  }, 200);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleDebouncedSearch(event.target.value);

  return (
    <Input
      placeholder="지역, 지하철, 학교 검색"
      leftContent={<FaSearch color="blue" className="mx-1" />}
      onChange={handleSearchChange}
    />
  );
}
