import * as React from "react";
import Footer from "../components/UI/Footer/Footer";
import Navbar from "../components/UI/Navbar/Navbar";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import dog from "../assets/images/background-section/dog.jpg";
import dog2 from "../assets/images/background-section/call-to-action.jpg";
import guy from "../assets/images/background-section/dogandguy.jpg";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import "./Formacion.css";

const Formacion = () => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(new Date("2022-01-18T21:11:54"));
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <br /> <br />
      <div className="content">
        <Card
          sx={{ height: "auto", maxWidth: "auto", margin: "125 25 100 25" }}
          className="card-container-formacion"
        >
          <CardContent>
            <Grid container>
              <Grid xs={4} className="formacion-container">
                <Typography className="formacion-title" variant="h4">
                  {" "}
                  Formación{" "}
                </Typography>{" "}
                <br /> <br />
                <TextField
                  id="date"
                  label="Fecha"
                  type="date"
                  defaultValue="2021-01-24"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />{" "}
                <br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Tipo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChangeAge}
                    label="Age"
                  >
                    <MenuItem value={1}>Online</MenuItem>
                    <MenuItem value={2}>Presencial?</MenuItem>
                  </Select>
                </FormControl>{" "}
                <br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Sector Veterinario
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChangeAge}
                    label="Age"
                  >
                    <MenuItem value={1}>Animales de compañía</MenuItem>
                    <MenuItem value={2}>Animales de producción</MenuItem>
                    <MenuItem value={3}>Gestión</MenuItem>
                  </Select>
                </FormControl>{" "}
                <br />
                {/* <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                /> */}
                <br />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Organizador
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChangeAge}
                    label="Age"
                  >
                    <MenuItem value={1}>B Braun</MenuItem>
                    <MenuItem value={2}>Bio Ibérica Veterinaria</MenuItem>
                    <MenuItem value={3}>Boehringer Ingelheim</MenuItem>
                    <MenuItem value={4}>Calier</MenuItem>
                    <MenuItem value={5}>Ceva</MenuItem>
                    <MenuItem value={6}>Dechra</MenuItem>
                    <MenuItem value={7}>Ecuphar</MenuItem>
                    <MenuItem value={8}>Fatro</MenuItem>
                    <MenuItem value={9}>Laboratorios Leti</MenuItem>
                    <MenuItem value={10}> Laboratorios ovejero</MenuItem>
                    <MenuItem value={11}>Leonvet SL</MenuItem>
                    <MenuItem value={12}>Livisto</MenuItem>
                    <MenuItem value={13}>MSD Animal Health</MenuItem>
                    <MenuItem value={14}>Simply Smart</MenuItem>
                    <MenuItem value={15}>Swedencare</MenuItem>
                  </Select>
                </FormControl>{" "}
                <br /> <br /> <br />
                <Button variant="contained">Buscar</Button>
              </Grid>
              <Grid xs={8} className="formacion-right-container">
                <hr />
                <div className="right-content">
                  <div className="square">
                    <h5>
                      <span id="first"> 25</span>
                      <span> Ene </span> <span> 2022</span>
                    </h5>
                  </div>
                  <Typography className="formacion-text" variant="h7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas odio felis, pellentesque eu urna mollis, dignissim
                    consectetur tortor. Vestibulum sed imperdiet odio.
                  </Typography>
                  <div className="image">
                    <img src={dog} />
                  </div>
                </div>
                <hr />

                <div className="right-content">
                  <div className="square">
                    <h5>
                      <span id="first"> 25</span>
                      <span> Ene </span> <span> 2022</span>
                    </h5>
                  </div>
                  <Typography className="formacion-text" variant="h7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas odio felis, pellentesque eu urna mollis, dignissim
                    consectetur tortor. Vestibulum sed imperdiet odio.
                  </Typography>
                  <div className="image">
                    <img src={dog2} />
                  </div>
                </div>
                <hr />
                <div className="right-content">
                  <div className="square">
                    <h5>
                      <span id="first"> 25</span>
                      <span> Ene </span> <span> 2022</span>
                    </h5>
                  </div>
                  <Typography className="formacion-text" variant="h7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas odio felis, pellentesque eu urna mollis, dignissim
                    consectetur tortor. Vestibulum sed imperdiet odio.
                  </Typography>
                  <div className="image">
                    <img src={guy} />
                  </div>
                </div>
                <hr />
                <br />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Formacion;
