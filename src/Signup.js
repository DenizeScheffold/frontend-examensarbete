import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from "@mui/material/Typography";
import { Box, FormControlLabel, RadioGroup, Button } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "./api/ApiClient";

export default function CreateUser() {
  const [values, setValues] = React.useState({
    password: "",
    passwordConf: "",
    otherParentId: "",
    username:"",
    email: "",
    showPassword: false,
  });

  const [acceptTnC, setAcceptTnC] = React.useState(false);

  const [errors, setErrors] = React.useState({
    passwordMatchError: false,
    passwordReqError: false,
    filledInputsError: false,
  });

  const handleCheckBox = (e) => {
    setAcceptTnC(e.target.checked);
    setErrors({
      ...errors,
      filledInputsError: inputMissingChecker(),
    });
  };

  const inputMissingChecker = () => {

    if (values.email.length === 0) {
      return true;
    }
    if (values.otherParentId.length === 0) {
      return true;
    }
    if (values.username.length === 0) {
      return true;
    }

    if (values.password.length === 0) {
      return true;
    }

    if (values.passwordConf.length === 0) {
      return true;
    }

    if (acceptTnC === false) {
      return true;
    }

    return false;
  };

  const passwordValidator = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{16,}$/;

    setErrors({
      ...errors,
      passwordMatchError: values.password !== values.passwordConf,
      passwordReqError: !regex.test(values.password),
    });
  };

  var inputPassword = React.createRef();

  React.useEffect(() => {
    setErrors({
      ...errors,
      filledInputsError: inputMissingChecker(),
    });
  }, [
    values,
    acceptTnC,
  ]);

  const handleSubmit = (e) => {
    passwordValidator();
    if (errors.passwordMatchError || errors.passwordReqError) {
      e.preventDefault();
      inputPassword.current.focus();
    }
    else{
      axios.post("http://localhost:8080/api/saveUser", 
      {email: values.email, otherParentId: values.otherParentId, username: values.username, password: values.password, role:"USER"
    },{
      /* auth: {
      username: "user",
      password: "7c2313ae-2818-404b-8767-e97d83b33403"
    } */})
    }

  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="90%"
        marginTop="auto"
        marginLeft="4%"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h2">Skapa Konto</Typography>
        </Grid>

        <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel >
              Email
            </InputLabel>
            <OutlinedInput
              label="email"
              value={values.email}
              onChange={handleChange("email")}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel >
            otherParentId
            </InputLabel>
            <OutlinedInput
              label="otherParentId"
              value={values.otherParentId}
              onChange={handleChange("otherParentId")}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel>
            username
            </InputLabel>
            <OutlinedInput
              label="username"
              value={values.username}
              onChange={handleChange("username")}
              sx={{ borderRadius: "29px" }}
            />
          </FormControl>
        </Grid>

        <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "error"
                  : ""
              }
            >
              Lösenord*
            </InputLabel>
            <OutlinedInput
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "error"
                  : ""
              }
              sx={{ borderRadius: "29px" }}
              label="Lösenord"
              inputRef={inputPassword}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ pr: 2 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          <Grid item sx={{ width: 0.5 }}>
          <FormControl fullWidth>
            <InputLabel      
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "error"
                  : ""
              }
            >
              Upprepa lösenord*
            </InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "29px" }}
              color={
                errors.passwordMatchError || errors.passwordReqError
                  ? "error"
                  : ""
              }
              label="Upprepa lösenord"
              type={values.showPassword ? "text" : "password"}
              value={values.passwordConf}
              onChange={handleChange("passwordConf")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ pr: 2 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box>
            <Typography variant="h11">
              {errors.passwordMatchError ? "Lösenorden matchar inte" : ""}{" "}
            </Typography>
          </Box>
          <Typography variant="h11">
            Använd minst 16 tecken och en kombination av bokstäver, siffror och
            symboler
          </Typography>
        </Grid>
        <Grid item sx={{ width: 0.5 }}>
          <RadioGroup >
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                />
              }
              label={
                <Typography>
                  Jag tillåter att Benny skickar påminnelser om aktiviteter och
                  liknande till min mail
                </Typography>
              }
            />

            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleOutlineIcon />}
                  checked={acceptTnC}
                  onChange={handleCheckBox}
                />
              }
              label={
                <Typography>
                  Jag godkänner Bennys användarvillkor
                </Typography>
              }
            />
          </RadioGroup>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={errors.filledInputsError}
            sx={{ mt: 1 }}
          >
            <Typography >SKAPA KONTO</Typography>
          </Button>
        </Grid>

        <Grid item  >
          <Box sx={{ marginTop: 1 }}>
            <Typography  sx={{ marginLeft: -1.5 }}>
              Har du redan ett konto?
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" >
              LOGGA IN
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
