import React, { useEffect } from "react";
import { AppRouter } from "./routers/AppRouter";
import OneSignal from "react-onesignal";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "c0d7bea4-67fd-4ce5-9b76-aae3577a8473",
    });
  }, []);
  return <AppRouter />;
}

export default App;
