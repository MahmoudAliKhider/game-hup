import useData from "./useData";

export interface Genre {
  id: number;
  name: String;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
