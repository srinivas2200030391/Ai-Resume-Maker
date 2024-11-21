import { SignedIn, useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/header";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isSignedIn && isLoaded) {
    return Navigate({ to: "/auth/sign-in" });
  }
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
