import {create} from "zustand";
import { persist } from 'zustand/middleware';

interface SearchData{
	id: number;
	name: string;
	type: string
}

interface SearchStore{
	searchData: SearchData[];
	inSearchMode: boolean;
	pickedFromSearch: SearchData | null;
	pick: (searchData: SearchData) => void;
	searchSetter: (searchData: SearchData[]) => void;
	disableSearchMode: () => void;
}

export const useSearchStore = create<SearchStore>()(
	persist(
		(set) => (
		{
			searchData: [],
			inSearchMode: false,
			pickedFromSearch: null,
			pick: (searchData) =>{
				console.log("U have selected from searchbar thsi", searchData);
				set({pickedFromSearch: searchData});
			},
			searchSetter: (searchData) => set({searchData:searchData, inSearchMode: true}),
			disableSearchMode: () => set({searchData: [], inSearchMode: false, pickedFromSearch: null})

		})
		)

	);