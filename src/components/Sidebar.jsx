import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryIcon from '@mui/icons-material/History';
import MapIcon from '@mui/icons-material/Map';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/templates">
          <ListItemIcon>
            <LibraryBooksIcon />
          </ListItemIcon>
          <ListItemText primary="Templates" />
        </ListItem>
        <ListItem button component={Link} to="/history">
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button component={Link} to="/map">
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
