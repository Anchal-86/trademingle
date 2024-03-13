import {
  Button,
  CardContent,
  DialogContent,
  DialogContentText,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  tabsClasses,
} from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { products } from "../productData";
import { ArrowForward } from "@mui/icons-material";

export default function ContentPage() {
  const [isClassNameActive, setClassNameActive] = useState(true);
  const [changeTags, setChangeTags] = useState(true);
  const [expandFor, setExpandFor] = useState("");
  const handleClick = (item: any) => {
    // Toggle the class name on click
    setClassNameActive(!isClassNameActive);
    setExpandFor(item.id);
    setChangeTags(!changeTags);
  };
  const [data, setData] = useState(products);
  // Tabs feature
  const [value, setValue] = React.useState(0);
  const [categories, setCategories] = useState<string[]>(
    Array.from(new Set(products.map((val) => val.category)))
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {categories.map((category) => {
            return (
              <Tab
                sx={{ color: "#ff6666" }}
                label={category}
                onClick={() => {
                  const filteredData = products.filter(
                    (val) => val.category === category
                  );
                  setData(filteredData);
                }}
              />
            );
          })}
        </Tabs>
      </Box>
      <Grid container className="card-bg">
        {data.map((item) => {
          return (
            <Grid item xl={3} md={3} lg={3} style={{ marginTop: "30px" }}>
              <div
                className="cards"
                style={{
                  width: "350px",
                  boxShadow: "0px 0px 10px 0px",
                  height: "500px",
                  backgroundColor: "#ffffff",
                  overflow: "scroll",
                }}
              >
                <h2 style={{ padding: "10px" }}>{item.title}</h2>
                <img
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                  src={item.image}
                  alt="...."
                />
                <Divider />
                <DialogContentText sx={{ padding: "10px" }}>
                  <p>{item.description}</p>
                  <small style={{ color: "green" }}>{item.price}</small>

                  <div
                    className={
                      isClassNameActive && expandFor === item.id
                        ? "moredetailsshow"
                        : "moredetailshide"
                    }
                  >
                    <p>{item.category}</p>
                    <p>{item.seller.location}</p>
                    <p>{item.seller.name}</p>
                  </div>
                  <div onClick={() => handleClick(item)}>
                    <Button>
                      {changeTags && expandFor === item.id ? "Back" : "More"}
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      overflow: "hidden",
                      backgroundColor: "gray",
                    }}
                  >
                    <div>
                      <Button sx={{ color: "green" }}>Buy</Button>
                    </div>
                    <div>
                      <Button sx={{ color: "red" }}>Sell</Button>
                    </div>
                  </div>
                </DialogContentText>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
