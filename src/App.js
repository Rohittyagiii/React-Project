import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Users from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigatin from "./shared/components/Navigation/MainNavigation";


const App = () => {
  return (
    <Router>  
      <MainNavigatin/>
      <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;