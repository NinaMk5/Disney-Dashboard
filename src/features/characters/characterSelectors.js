export const selectCharacters = (state) => state.characters.items;

export const selectCharacterStatus = (state) => ({
	loading: state.characters.loading,
	error: state.characters.error,
});

export const selectFilteredCharacters = (state) => {
	const characters = selectCharacters(state);
	const searchTerm = state.characters.searchTerm.trim().toLowerCase();

	if (!searchTerm) {
		return characters;
	}

	return characters.filter((character) =>
		character.name?.toLowerCase().includes(searchTerm),
	);
};
