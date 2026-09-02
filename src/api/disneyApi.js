import axios from "axios";

const disneyApi = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

export const getCharacters = async () => {

  const { data } = await disneyApi.get("/character");
    //keeping the Redux state cleaner and easier to consume.
  return data.data;
};