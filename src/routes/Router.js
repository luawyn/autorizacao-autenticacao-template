import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import { CreateTrips } from "../pages/CreateTrips";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { TripDetails } from "../pages/TripDetails";
import UserPage from "../pages/UserPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/users/:id"} element={<UserPage />} />
        <Route path={"/details"} element={<TripDetails />} />
        <Route path={"/createtrips"} element={<CreateTrips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
