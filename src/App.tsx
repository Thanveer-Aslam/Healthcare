import React from "react";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <div className="h-screen">
      {/* Sidebar */}
      <Dashboard />
    </div>
  );
};

export default App;
