import { axiosAuth } from "../config/axios";
import { useQuery } from "react-query";


export const useGetSWFilms = () => {
  const query = useQuery("films", () => axiosAuth().get("/films"));
  return query;
};

export const useGetSWFilm = (id) => {
  const query = useQuery("film", () => axiosAuth().get(`/films/${id}`));
  return query;
};

export const useGetSWPeople = () => {
  const query = useQuery("people", () => axiosAuth().get("/people"));
  return query;
};

export const useGetSWPerson = (id) => {
  const query = useQuery("person", () => axiosAuth().get(`/people/${id}`));
  return query;
};

export const useGetSWStarships = () => {
  const query = useQuery("starships", () => axiosAuth().get("/starships"));
  return query;
};

export const useGetSWStarship = (id) => {
  const query = useQuery("starship", () => axiosAuth().get(`/starships/${id}`));
  return query;
};

export const useGetSWSpecies = () => {
  const query = useQuery("species", () => axiosAuth().get("/species"));
  return query;
};

export const useGetSWSpecie = (id) => {
  const query = useQuery("specie", () => axiosAuth().get(`/species/${id}`));
  return query;
};

