import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "../../api/disneyApi";

//kind of the middleman between Redux and your API.
//fetchCharacters is the Redux-powered function that calls your API and tells the Redux slice whether the request is loading, successful, or failed.

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const characters = await getCharacters();

    return characters;
  }
);