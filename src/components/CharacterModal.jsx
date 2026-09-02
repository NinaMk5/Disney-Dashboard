import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedCharacter } from "../features/characters/characterSlice.js";

function CharacterModal() {
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characters.selectedCharacter);

  const closeModal = () => dispatch(clearSelectedCharacter());

  const details = [
    ["Films", character?.films],
    ["TV Shows", character?.tvShows],
    ["Video Games", character?.videoGames],
    ["Allies", character?.allies],
    ["Enemies", character?.enemies],
  ];

  return (
    <Dialog open={Boolean(character)} onClose={closeModal} fullWidth maxWidth="sm">
      <DialogTitle sx={{ pb: 1, fontWeight: 700 }}>
        Character Details
      </DialogTitle>

      <DialogContent dividers sx={{ p: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            mb: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: "action.hover",
          }}
        >
          {character?.imageUrl ? (
          <img
            src={character.imageUrl}
            alt={character.name}
            style={{ width: 96, height: 96, objectFit: "cover", borderRadius: "50%", border: "3px solid", borderColor: "#f5c542" }}
          />
          ) : (
            <Box sx={{ width: 96, height: 96, borderRadius: "50%", backgroundColor: "divider" }} />
          )}
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
              {character?.name ?? "Unknown character"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Disney character profile
            </Typography>
          </Box>
        </Box>

        {details.map(([label, values]) => (
          <Box key={label} sx={{ mb: 2.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, mb: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {values?.length ?? 0}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {(values?.length ? values : ["None"]).map((value) => (
                <Chip
                  key={value}
                  label={value}
                  size="small"
                  variant={values?.length ? "outlined" : "filled"}
                  color={values?.length ? "primary" : "default"}
                />
              ))}
            </Box>
            {label !== details.at(-1)[0] && <Divider sx={{ mt: 2.5 }} />}
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CharacterModal;
