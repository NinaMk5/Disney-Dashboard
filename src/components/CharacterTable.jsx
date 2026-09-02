import CircularProgress from "@mui/material/CircularProgress";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  selectCharacterStatus,
  selectFilteredCharacters,
} from "../features/characters/characterSelectors.js";
import { setSelectedCharacter } from "../features/characters/characterSlice.js";

function CharacterTable() {
  const dispatch = useDispatch();
  const characters = useSelector(selectFilteredCharacters);
  const { loading, error } = useSelector(selectCharacterStatus);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setPage(0);
  }, [characters.length]);

  const visibleCharacters = characters.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Character Name</TableCell>

            <TableCell>TV Shows</TableCell>

            <TableCell>Video Games</TableCell>

            <TableCell>Allies</TableCell>

            <TableCell>Enemies</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <CircularProgress size={28} aria-label="Loading characters" />
              </TableCell>
            </TableRow>
          )}

          {!loading && error && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography color="error">Unable to load characters: {error}</Typography>
              </TableCell>
            </TableRow>
          )}

          {!loading && !error && characters.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No characters found.
              </TableCell>
            </TableRow>
          )}

          {!loading && !error && visibleCharacters.map((character) => (
            <TableRow
              key={character._id ?? character.id ?? character.name}
              hover
              tabIndex={0}
              onClick={() => dispatch(setSelectedCharacter(character))}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  dispatch(setSelectedCharacter(character));
                }
              }}
              sx={{ cursor: "pointer" }}
            >
              <TableCell>{character.name ?? "Unknown"}</TableCell>
              <TableCell>{character.tvShows?.length ?? 0}</TableCell>
              <TableCell>{character.videoGames?.length ?? 0}</TableCell>
              <TableCell>{character.allies?.join(", ") || "None"}</TableCell>
              <TableCell>{character.enemies?.join(", ") || "None"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={characters.length}
        page={page}
        onPageChange={(_, nextPage) => setPage(nextPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(Number(event.target.value));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TableContainer>
  );
}

export default CharacterTable;
