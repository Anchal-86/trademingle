import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ContentPage from "./ContentPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../store/store";
// import { useNavigate } from "react-router-dom";

import {
  Info,
  Language,
  NotificationAdd,
  PrivacyTip,
  SettingsApplications,
} from "@mui/icons-material";
import LoginPage from "./LoginPage";
import { Dialog, DialogContent } from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const languageOptions = [
  "Hindi",
  "English",
  "Punjabi",
  "Gujrati",
  "Harayanvi",
  "Marathi",
];

export default function MingleApp() {
  const email = useAppSelector((state) => state.login.email);
  const password = useAppSelector((state) => state.login.password);
  const age = useAppSelector((state) => state.login.age);
  const fullname = useAppSelector((state) => state.login.fullname);
  const usename = useAppSelector((state) => state.login.username);
  const contact = useAppSelector((state) => state.login.contact);
  const city = useAppSelector((state) => state.login.city);
  const country = useAppSelector((state) => state.login.country);
  const bankname = useAppSelector((state) => state.login.bankname);
  const income = useAppSelector((state) => state.login.income);
  const jobtitle = useAppSelector((state) => state.login.jobtitle);
  const acnumber = useAppSelector((state) => state.login.acnumber);
  const contactemail = useAppSelector((state) => state.login.contactemail);

  const [aboutAppDialog, setAboutAppDialog] = useState(false);
  const [profileDialog, setProfileDialog] = useState(false);
  // const history = useNavigate();
  // Language feature
  const [anchorLanguageEl, setAnchorLanguageEl] =
    React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
  const openLanguageTab: boolean = Boolean(anchorLanguageEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorLanguageEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ): void => {
    setSelectedIndex(index);
    setAnchorLanguageEl(null);
  };

  const handleCloseLanguage = (): void => {
    setAnchorLanguageEl(null);
  };
  //Account feature
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openAC = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //   dialog box-----
  //   About app open box----------
  const openAboutAppDialog = () => {
    setAboutAppDialog(true);
  };
  const closeAboutAppDialog = () => {
    setAboutAppDialog(false);
  };
  //   Profile open box---------
  const openProfileDialog = () => {
    setProfileDialog(true);
  };
  const closeProfileDialog = () => {
    setProfileDialog(false);
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>
            <React.Fragment>
              <Box
                sx={{
                  right: 20,
                  top: 8,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={openAC ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAC ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Avatar />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openAC}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    openProfileDialog();
                  }}
                >
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <Divider />
          <List>
            <ListItemButton>
              <NotificationAdd />
              Notifications
            </ListItemButton>
            <ListItemButton>
              <MailIcon />
              Mails
            </ListItemButton>
            <ListItemButton>
              <PrivacyTip />
              Privacy Policy
            </ListItemButton>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ bgcolor: "background.paper" }}
            >
              <ListItem
                button
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="Language"
                aria-expanded={openLanguageTab ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <Language />
                <ListItemText
                  primary="Language"
                  secondary={languageOptions[selectedIndex]}
                />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorLanguageEl}
              open={openLanguageTab}
              onClose={handleCloseLanguage}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {languageOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <ListItemButton>
              <SettingsApplications />
              Settings
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                openAboutAppDialog();
              }}
            >
              <Info />
              About App
            </ListItemButton>
          </List>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="Content-page" element={<ContentPage />}></Route>
          <Route path="*" element={<>Error 404</>}></Route>
        </Routes>
      </BrowserRouter>
      {aboutAppDialog && (
        <Dialog fullScreen open={aboutAppDialog}>
          <div>
            <IconButton
              onClick={closeAboutAppDialog}
              aria-label="close"
              sx={{
                position: "absolute",
                right: 18,
                top: 4,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="first-content"
                style={{ width: "600px", height: "370px" }}
              ></div>
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#bb0151" }}>Real-Time Stock Data</h1>
                <p style={{ color: "#0bafd7" }}>
                  Apps provide real-time updates on stock prices, market trends,
                  and indices. Users can track the performance of individual
                  stocks, mutual funds, ETFs (Exchange-Traded Funds), and
                  commodities.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1>Personalized Watchlists</h1>
                <p style={{ color: "#626264" }}>
                  Users can create personalized watchlists to monitor specific
                  stocks or sectors they're interested in. These watchlists can
                  be customized to track price movements and news updates for
                  selected securities.
                </p>
              </div>
              <div
                className="sec-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="third-content"
                style={{ width: "280px", height: "370px" }}
              ></div>
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#a81f22" }}>Portfolio Management</h1>
                <p>
                  {" "}
                  Users can manage their investment portfolios within the app.
                  They can track the performance of their holdings, view overall
                  gains or losses, and analyze their asset allocation.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#f9616c" }}>Trading and Investing</h1>
                <p style={{ color: "#4dead0" }}>
                  Some apps offer the ability to buy and sell stocks, options,
                  and other securities directly through the platform. They may
                  also provide tools for setting price alerts, placing limit
                  orders, and executing trades.
                </p>
              </div>
              <div
                className="forth-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="fifth-content"
                style={{ width: "380px", height: "370px" }}
              ></div>
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#b82428" }}>Educational Resources</h1>
                <p style={{ color: "#128acc" }}>
                  To help users understand the stock market better, apps often
                  provide educational resources such as articles, tutorials,
                  videos, and webinars on investing strategies, market analysis,
                  and financial planning.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#4085c4" }}>Charting Tools</h1>
                <p style={{ color: "#4085c4" }}>
                  Charts and technical analysis tools are included in many apps,
                  allowing users to visualize stock price movements, perform
                  technical analysis, and identify patterns for making informed
                  investment decisions.
                </p>
              </div>
              <div
                className="six-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="seven-content"
                style={{ width: "250px", height: "370px" }}
              ></div>
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1>Notifications and Alerts</h1>
                <p>
                  Users can receive customizable notifications and alerts about
                  price changes, news updates, or specific events related to
                  their selected stocks or portfolios.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1>Security Features</h1>
                <p style={{ color: "#565780" }}>
                  Stock market apps prioritize security by implementing measures
                  like two-factor authentication, encryption, and secure logins
                  to protect users' financial information and transactions.
                </p>
              </div>
              <div
                className="eight-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="nine-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#a6a0ad" }}>Customer Support</h1>
                <p style={{ color: "#978271" }}>
                  Access to customer support services, including FAQs, live
                  chat, or helplines, for addressing any app-related queries or
                  issues.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "400px", marginLeft: "50px" }}>
                <h1 style={{ color: "#73737f" }}>News and Analysis</h1>
                <p style={{ color: "#b6bbd8" }}>
                  {" "}
                  Many apps offer financial news, analysis, and insights from
                  various sources. This content helps users make informed
                  decisions by staying updated on market trends, company
                  earnings reports, analyst recommendations, and global economic
                  news.
                </p>
              </div>
              <div
                className="ten-content"
                style={{ width: "400px", height: "370px" }}
              ></div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {profileDialog && (
        <Dialog fullScreen open={profileDialog}>
          <div>
            <IconButton
              onClick={closeProfileDialog}
              aria-label="close"
              sx={{
                position: "absolute",
                right: 18,
                top: 4,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <DialogContent>
            <h1>{fullname}</h1>
            <h5>{usename}</h5>
            <h3>{jobtitle}</h3>
            <p>{email}</p>
            <p>{age}</p>
            <p>
              {city}, {country}
            </p>
            <p>{income}</p>
            <p>{bankname}</p>
            <p>{contact}</p>
            <p>{contactemail}</p>
            <p>{acnumber}</p>
            <p>{password}</p>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
