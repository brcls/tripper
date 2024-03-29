import React from "react";
import Routes from "./Routes";
import { AuthProvider } from "./src/utils/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
