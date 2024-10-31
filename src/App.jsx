import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import EventsPage from './pages/EventsPage';
import TemplatesPage from './pages/TemplatesPage';
import MapPage from './pages/MapPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flexGrow={1} p={3}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
