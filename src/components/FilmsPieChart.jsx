import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function FilmsPieChart() {
  return (
    <Paper sx={{ mt: 4, p: 3 }}>
      <Typography variant="h6">Films Participation</Typography>
      <Box sx={{ height: 300 }}>Chart will render here</Box>
    </Paper>
  );
}

export default FilmsPieChart;
