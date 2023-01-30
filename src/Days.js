/*import * as React from 'react';
import axios from "./api/axios";
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { useForm } from "react-hook-form";

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
  });
  const { register, handleSubmit } = useForm();
  const onError = (errors, e) => console.log(errors, e);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const onSubmit = () => {
    // async request which may result error
    throw new Error("Something is wrong");
  };
  
  <>
    <form
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e)
        // you will have to catch those error and handle them
        .catch(() => {});
      }}
    />
    // The following is a better approach
    <form
      onSubmit={handleSubmit = (data) => {
          const result = axios.post("http://localhost:8080/api/setPlan", 
          {weekNumber: 4, 
          userId: 1,
          date: "2023-01-23",
          activity: 2,
          possible: true
            //firstName: values.firstname, lastname: values.lastname, email: values.email, password: values.password, role:"USER"
        },{auth: {
          username: "user",
          password: "7c2313ae-2818-404b-8767-e97d83b33403"
        }})
      setWeekInfo(result.data);
    }}

    />
  </>;
 

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
 
      <FormLabel component="legend">Select your activities</FormLabel>
      <FormHelperText>Choose the days where you can L and H</FormHelperText>
      <FormGroup>
      <input {...register("MLG")} 
          control={
            <Switch checked={state.MLG} onChange={handleChange} name="MLG" /> 
          }
          label="Monday-L"
        />
        <FormControlLabel
          control={
            <Switch checked={state.MHG} onChange={handleChange} name="MHG" />
          }
          label="Monday-H"
        />
     <FormControlLabel
          control={
            <Switch checked={state.MLG} onChange={handleChange} name="TuLG" />
          }
          label="Tuesday-L"
        />
        <FormControlLabel
          control={
            <Switch checked={state.MHG} onChange={handleChange} name="TuHG" />
          }
          label="Tuesday-H"
        />
           <FormControlLabel
          control={
            <Switch checked={state.MLG} onChange={handleChange} name="WLG" />
          }
          label="Wednesday-L"
        />
        <FormControlLabel
          control={
            <Switch checked={state.MHG} onChange={handleChange} name="WHG" />
          }
          label="Wednesday-H"
        />
           <FormControlLabel
          control={
            <Switch checked={state.MLG} onChange={handleChange} name="ThLG" />
          }
          label="Thursday-L"
        />
        <FormControlLabel
          control={
            <Switch checked={state.MHG} onChange={handleChange} name="ThHG" />
          }
          label="Thursday-H"
        />
           <FormControlLabel
          control={
            <Switch checked={state.MLG} onChange={handleChange} name="FLG" />
          }
          label="Friday-L"
        />
        <FormControlLabel
          control={
            <Switch checked={state.MHG} onChange={handleChange} name="FHG" />
          }
          label="Friday-H"
        />
           <button type="submit">Submit</button>
      </FormGroup>
     
    </form>
    

  );
}
*/