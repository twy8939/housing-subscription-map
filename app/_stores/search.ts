import create from "zustand";

interface SearchState {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
