import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";
import { InfoProvider } from "./context/userContext.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import SpinnerFullPage from "./ui/SpinnerFullPage.jsx";

/*
Before - dist/assets/index-e25ee4fb.js    879.86 kB │ gzip: 254.71 kB 
 
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Booking from "./pages/Booking.jsx";
import Checkin from "./pages/checkin.jsx";
import Register from "./pages/Register.jsx"; 
*/

const Dashboard = lazy(() => import("./pages/Dashboard.jsx"));
const Bookings = lazy(() => import("./pages/Bookings.jsx"));
const Cabins = lazy(() => import("./pages/Cabins.jsx"));
const Users = lazy(() => import("./pages/Users.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Account = lazy(() => import("./pages/Account.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const Booking = lazy(() => import("./pages/Booking.jsx"));
const Checkin = lazy(() => import("./pages/Checkin.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <InfoProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <GlobalStyles />
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="bookings/:bookingId" element={<Booking />} />
                  <Route path="checkin/:bookingId" element={<Checkin />} />
                  <Route path="cabins" element={<Cabins />} />
                  <Route path="users" element={<Users />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="account" element={<Account />} />
                </Route>

                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </InfoProvider>
    </DarkModeProvider>
  );
}

export default App;
