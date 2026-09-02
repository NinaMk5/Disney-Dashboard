import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default ThemeToggle;
