import { useColorScheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <SelectSmall></SelectSmall>
      <ModeToggle />
      <p>hello world</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function SelectSmall() {
  const { mode, setMode } = useColorScheme();

  const handleChangeMode = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChangeMode}
      >
        <MenuItem value={"light"}>
          <LightModeIcon />
          Light
        </MenuItem>
        <MenuItem value={"dark"}>
          {" "}
          <DarkModeOutlinedIcon />
          Dark
        </MenuItem>
        <MenuItem value={"system"}>
          <SettingsBrightnessIcon />
          System
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default App;
