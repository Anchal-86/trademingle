import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ageType,
  emailType,
  initialStateType,
  nameType,
  passwordType,
  cityType,
  contactType,
  fullnameType,
  usernameType,
  countryType,
  incomeType,
  banknameType,
  contactemailType,
  acnumberType,
  jobtitleType,
} from "./types";

export const initialState: initialStateType = {
  age: "",
  name: "",
  email: "",
  password: "",
  fullname: "",
  acnumber: "",
  bankname: "",
  city: "",
  contact: "",
  contactemail: "",
  country: "",
  income: "",
  jobtitle: "",
  username: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    //1st reducer
    setName(state, action: PayloadAction<nameType>) {
      state.name = action.payload.name;
    },
    setEmail(state, action: PayloadAction<emailType>) {
      state.email = action.payload.email;
    },
    setPassword(state, action: PayloadAction<passwordType>) {
      state.password = action.payload.password;
    },
    setAge(state, action: PayloadAction<ageType>) {
      state.age = action.payload.age;
    },
    setFullname(state, action: PayloadAction<fullnameType>) {
      state.fullname = action.payload.fullname;
    },
    setUsername(state, action: PayloadAction<usernameType>) {
      state.username = action.payload.username;
    },
    setCity(state, action: PayloadAction<cityType>) {
      state.city = action.payload.city;
    },
    setCountry(state, action: PayloadAction<countryType>) {
      state.country = action.payload.country;
    },
    setContact(state, action: PayloadAction<contactType>) {
      state.contact = action.payload.contact;
    },
    setBankname(state, action: PayloadAction<banknameType>) {
      state.bankname = action.payload.bankname;
    },
    setContactemail(state, action: PayloadAction<contactemailType>) {
      state.contactemail = action.payload.contactemail;
    },
    setIncome(state, action: PayloadAction<incomeType>) {
      state.income = action.payload.income;
    },
    setJobtitle(state, action: PayloadAction<jobtitleType>) {
      state.jobtitle = action.payload.jobtitle;
    },
    setAcnumber(state, action: PayloadAction<acnumberType>) {
      state.acnumber = action.payload.acnumber;
    },
  },
});

export default loginSlice.reducer;
export const {
  setName,
  setEmail,
  setPassword,
  setAge,
  setAcnumber,
  setBankname,
  setCity,
  setContact,
  setContactemail,
  setCountry,
  setFullname,
  setIncome,
  setJobtitle,
  setUsername,
} = loginSlice.actions;
