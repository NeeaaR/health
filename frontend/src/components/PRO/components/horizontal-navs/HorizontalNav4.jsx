import React from 'react';
import { AppBar, Avatar, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';


import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
    }
  },
  drawerContainer: {
    width: 256,
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'mui-assets/img/logo-pied-piper-white.png', width: 120 },
    'brand-small': { image: 'mui-assets/img/logo-pied-piper-white-icon.png', width: 32 },
    'link1': 'Features',
    'link2': 'Enterprise',
    'link3': 'Support',
    'link4': 'ICO',
    'avatar': 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    ...props.content
  };

  let brand = content['brand'].text || '';
  let brandSmall = content['brand-small'].text || '';

  if (content['brand'].image) {
    brand = <img src={ content['brand'].image } alt="" width={ content['brand'].width } />;
  }

  if (content['brand-small'].image) {
    brandSmall = <img src={ content['brand-small'].image } alt="" width={ content['brand-small'].width } />;
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
          {brand}
        </Link>
        <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
          {brandSmall}
        </Link>
        <IconButton color="inherit">
          <MailIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <Avatar alt="" src={content['avatar']} /> 
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}