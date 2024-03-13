import * as React from "react";
import { useAppDispatch } from "../store/store";
import {
  setName,
  setPassword,
  setEmail,
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
} from "../store/reducers";
import { Facebook, Google, Instagram, LinkedIn } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function LoginPage() {
  const history = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      className="login-page-bg"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-7.4%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#27363b",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ lineHeight: "0.5" }}>
            <h1 style={{ color: "#ff6666" }}>Member SignIn</h1>
            <p style={{ color: "grey" }}>Please fill in your basic info</p>
          </div>
          <div
            className="input-bg"
            style={{ height: "35px", width: "270px", marginTop: "12px" }}
          >
            <input
              required
              style={{
                height: "30px",
                width: "250px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
              }}
              type="text"
              placeholder="Name"
              onChange={(e) => {
                dispatch(setName({ name: e.target.value }));
              }}
            />
          </div>
          <div
            className="input-bg"
            style={{ height: "35px", width: "270px", marginTop: "12px" }}
          >
            <input
              required
              style={{
                height: "30px",
                width: "250px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
              }}
              type="email"
              placeholder="Email"
              onChange={(e) => {
                dispatch(setEmail({ email: e.target.value }));
              }}
            />
          </div>
          <div
            className="input-bg"
            style={{ height: "35px", width: "270px", marginTop: "12px" }}
          >
            <input
              required
              style={{
                height: "30px",
                width: "250px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
              }}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                dispatch(setPassword({ password: e.target.value }));
              }}
            />
          </div>
          <button
            type="submit"
            className="btn"
            style={{
              height: "35px",
              width: "270px",
              marginTop: "35px",
              color: "#ffffff",
              fontSize: "15px",
            }}
          >
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="#first-one"
            >
              {" "}
              SignIn
            </a>
          </button>
          <p style={{ color: "grey" }}>You don't have any account!</p>
        </div>
        <div className="login-img" style={{ padding: "30px" }}>
          <div style={{ lineHeight: "0.5", textAlign: "right" }}>
            <h1 style={{ color: "#ff6666" }}>Login</h1>
            <p style={{ color: "grey" }}>Using your social media account</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <div className="ac-logo">
              <LinkedIn sx={{ fontSize: "30px" }} />
            </div>
            <div className="ac-logo">
              <Instagram sx={{ fontSize: "30px" }} />
            </div>
            <div className="ac-logo">
              <Google sx={{ fontSize: "30px" }} />
            </div>
            <div className="ac-logo">
              <Facebook sx={{ fontSize: "30px" }} />
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "70px" }}
          >
            <Checkbox {...label} />
            <p style={{ fontSize: "13px", marginLeft: "-3px", color: "grey" }}>
              By signing up i agree with{" "}
              <i style={{ color: "#ff6666" }}>terms and conditions</i>
            </p>
          </div>
          <div>
            <i style={{ color: "#fff" }}>
              Already have an account!{" "}
              <a style={{ color: "#66d9ff" }} href="/">
                Login
              </a>
            </i>
          </div>
        </div>
      </div>

      <div
        id="first-one"
        className="confirmation-page-bg"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "-7.4%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="form-bg"
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "#27363b",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ lineHeight: "0.5" }}>
              <h1 style={{ color: "#66d9ff" }}>Basic Info</h1>
              <p style={{ color: "gray" }}>Fill in your basic info</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="input-bg"
                style={{ height: "35px", width: "270px", marginTop: "12px" }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="text"
                  placeholder="Full name"
                  onChange={(e) => {
                    dispatch(setFullname({ fullname: e.target.value }));
                  }}
                />
              </div>
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "12px",
                  marginLeft: "30px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    dispatch(setUsername({ username: e.target.value }));
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="input-bg"
                style={{ height: "35px", width: "270px", marginTop: "12px" }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="text"
                  placeholder="City"
                  onChange={(e) => {
                    dispatch(setCity({ city: e.target.value }));
                  }}
                />
              </div>
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "12px",
                  marginLeft: "30px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="text"
                  placeholder="Country"
                  onChange={(e) => {
                    dispatch(setCountry({ country: e.target.value }));
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="input-bg"
                style={{ height: "35px", width: "270px", marginTop: "12px" }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="number"
                  placeholder="Age"
                  onChange={(e) => {
                    dispatch(setAge({ age: e.target.value }));
                  }}
                />
              </div>
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "12px",
                  marginLeft: "30px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="tel"
                  placeholder="Contact"
                  onChange={(e) => {
                    dispatch(setContact({ contact: e.target.value }));
                  }}
                />
              </div>
            </div>

            <div
              className="input-bg"
              style={{ height: "35px", width: "270px", marginTop: "12px" }}
            >
              <input
                required
                style={{
                  height: "30px",
                  width: "250px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                }}
                type="text"
                placeholder="Job title"
                onChange={(e) => {
                  dispatch(setJobtitle({ jobtitle: e.target.value }));
                }}
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                height: "35px",
                width: "270px",
                marginTop: "35px",
                color: "#ffffff",
                fontSize: "15px",
              }}
            >
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                href="#next-one"
              >
                Fill next
              </a>
            </button>
          </div>
          <div
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "#27363b",
            }}
            className="confirmation-bg"
          ></div>
        </div>
      </div>
      <div
        id="next-one"
        className="confirmation-page-bg"
        style={{
          marginTop: "-3%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "#27363b",
            }}
            className="next-confirmation-bg"
          ></div>
          <div
            className="form-bg"
            style={{
              width: "700px",
              height: "500px",
              backgroundColor: "#27363b",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ lineHeight: "0.5", textAlign: "left" }}>
              <h1 style={{ color: "#66d9ff" }}>Account Info</h1>
              <p style={{ color: "gray" }}>Fill in your Account info</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="input-bg"
                style={{ height: "35px", width: "270px", marginTop: "25px" }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="text"
                  placeholder="Bank Name"
                  onChange={(e) => {
                    dispatch(setBankname({ bankname: e.target.value }));
                  }}
                />
              </div>
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "25px",
                  marginLeft: "30px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="number"
                  placeholder="Account Number"
                  onChange={(e) => {
                    dispatch(setAcnumber({ acnumber: e.target.value }));
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "25px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="number"
                  placeholder="Your income (yearly)"
                  onChange={(e) => {
                    dispatch(setIncome({ income: e.target.value }));
                  }}
                />
              </div>
              <div
                className="input-bg"
                style={{
                  height: "35px",
                  width: "270px",
                  marginTop: "25px",
                  marginLeft: "30px",
                }}
              >
                <input
                  required
                  style={{
                    height: "30px",
                    width: "250px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  type="email"
                  placeholder="Contact with email"
                  onChange={(e) => {
                    dispatch(setContactemail({ contactemail: e.target.value }));
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "40px",
              }}
            >
              <Checkbox {...label} />
              <p
                style={{ fontSize: "13px", marginLeft: "-3px", color: "grey" }}
              >
                i'm adult (18+)
              </p>
              <Checkbox {...label} sx={{ marginLeft: "20px" }} />
              <p
                style={{ fontSize: "13px", marginLeft: "-3px", color: "grey" }}
              >
                I agree with{" "}
                <i style={{ color: "#ff6666" }}>terms and conditions</i>
              </p>
            </div>
            <button
              onClick={() => {
                setTimeout(() => {
                  history("/Content-page");
                }, 2000);
              }}
              type="submit"
              className="btn"
              style={{
                height: "35px",
                width: "270px",
                marginTop: "35px",
                color: "#ffffff",
                fontSize: "15px",
              }}
            >
              <a
                style={{ color: "#fff", textDecoration: "none" }}
                href="#next-one"
              >
                Confirm
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
