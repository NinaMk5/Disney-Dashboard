import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

function ExportButton() {
  return (
    <Button variant="contained" startIcon={<DownloadIcon />}>
      Export XLSX
    </Button>
  );
}

export default ExportButton;
