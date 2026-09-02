import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./characterThunks.js";


//initialState — Defines what character information Redux will store: characters, loading status, errors, search text, and selected character.

const initialState = {
  items: [],
  loading: false,
  error: null,
  searchTerm: "",
  selectedCharacter: null,
};

//reducers — Defines actions that components can use to change the state, such as searching or selecting a character.

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },

    clearSelectedCharacter: (state) => {
      state.selectedCharacter = null;
    },
},

//extraReducers — Handles the API request lifecycle: pending = loading, fulfilled = success/data received, rejected = error.

  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const {
  setSearchTerm,
  setSelectedCharacter,
  clearSelectedCharacter,
} = characterSlice.actions;


export default characterSlice.reducer;