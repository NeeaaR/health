import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { isAuthenticated, loading } = auth;

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElCenter, setAnchorElCenter] = React.useState(null);


  const isCenterMenuOpen = Boolean(anchorElCenter);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCenterMenuOpen = (event) => {
    setAnchorElCenter(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCenterMenuClose = () => {
    setAnchorElCenter(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const secondaryMenuId = "secondary-search-account-menu";

  const userId = auth.user?.id ?? "default_user_id";

  const authLinks = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={`/profil/${userId}`} style={{ color: 'inherit', textDecoration: 'none' }}>Mon Profil</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a href="/logout" onClick={onLogout} style={{ color: 'inherit', textDecoration: 'none' }}>
          Déconnexion
        </a>
      </MenuItem>
    </Menu>
  );

  const renderMenuCenter = (
    <Menu
      anchorEl={anchorElCenter}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      id={secondaryMenuId}
      keepMounted
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      open={isCenterMenuOpen}
      onClose={handleCenterMenuClose}
    >
      <MenuItem onClick={handleCenterMenuClose}>
        <Link component="div" to="/find/doctors" style={{ color: 'inherit', textDecoration: 'none' }}>
          Médecin
        </Link>
      </MenuItem>
      <MenuItem onClick={handleCenterMenuClose}>
      <Link component="div" to="/find/pharmacy" style={{ color: 'inherit', textDecoration: 'none' }}>
          Pharmacies
        </Link>
      </MenuItem>
    </Menu>
  );


  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link component="div" to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
          Se connecter
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Paramètres</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="voir 17 nouvelles notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {!loading && <p>Mon Profil</p>}
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent", boxShadow: "none" }}>

        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#fff",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "none",
              },
            }}
          >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src="/images/logo/logo.png" alt="Logo" style={{ maxWidth: '80px' }} />
          </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>  
          <Typography variant="h6" noWrap component="div" sx={{ color: "#fff", marginRight: 2 }}>
                FAQ
              </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={secondaryMenuId}
              aria-haspopup="true"
              onClick={handleCenterMenuOpen}
              color="inherit"
            >
             <Typography variant="h6" noWrap component="div" sx={{ color: "#fff" }}>
                Trouver 
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="voir 4 nouveaux mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="voir 17 nouvelles notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenuCenter}
      {isAuthenticated ? authLinks : renderMenu}
    </Box>
  );
}
