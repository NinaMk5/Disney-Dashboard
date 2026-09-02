import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SearchBar from "./SearchBar.jsx";
import CharacterTable from "./CharacterTable.jsx";
import CharacterModal from "./CharacterModal.jsx";
import FilmsPieChart from "./FilmsPieChart.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

import { fetchCharacters } from "../features/characters/characterThunks.js";

function Dashboard({ darkMode, setDarkMode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" component="h1">
            Disney Character Dashboard
          </Typography>

          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>

        <SearchBar />

        <CharacterTable />

        <FilmsPieChart />

        <CharacterModal />
      </Box>
    </Container>
  );
}

export default Dashboard;
