import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "./Hooks/useLocalaStorage";
import { UserContext } from "./Context/UserContext";

import None from "./components/None/None";
import AdminHomepage from "./components/AdminHomepage/AdminHomepage";
import UserHomepage from "./components/UserHomePage/UserHomepage";
import CreateFlight from "./components/CreateFlight/CreateFlight";
import UserProfile from "./components/UserProfile/UserProfile";
import ReservedFlights from "./components/ReservedFlights/ReservedFlights";
import PlaneSeats from "./components/planeSeats/planeSeats";
import SummaryConfirm from "./components/SummaryConfirm/SummaryConfirm";
import ConfirmedFlight from "./components/ConfirmedFlight/ConfirmedFlight";
import SignUp from "./components/SignUp/SignUp";
import { Box } from "@mui/material";
import background from "./Images/Background.jpg";
import backgroundA from "./Images/BackgroundY.jpg";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Payment from "./components/Payment/Payment";
import { Login } from "./components/Login/Login";
import PlaneSeatsAfterEdit from "./components/PlaneSeatsAfterEdit/PlaneSeatsAfterEdit";
import EditDchoose from "./components/EditDchoose/EditDchoose";
// window.addEventListener("beforeunload", (ev) => {
//   localStorage.clear();
// });
const App = () => {
  const [user, setUser] = useLocalStorage("Authentication", {});
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  axios.interceptors.request.use(function (config) {
    if (user.token) {
      const token = "Bearer " + user.token;
      config.headers.authorization = token;
    }
    return config;
  });
  return (
    <Router className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Box
          p={0}
          sx={{
            minHeight: "100%",
            position: "absolute",
            overflow: "auto",
            width: "100%",
            backgroundImage: `url(${
              user.type && user.type === "admin" ? background : background
            })`,
            backgroundRepeat: "repeat-y",
          }}
        >
          <Routes>
            <Route element={<ResponsiveAppBar />}>
              {user.type && user.type === "admin" && (
                <>
                  <Route path="/" element={<AdminHomepage />} />
                  <Route path="/CreateFlight" element={<CreateFlight />} />{" "}
                </>
              )}
              {(!user ||
                user == {} ||
                !user.token ||
                (user.type && user.type === "user")) && (
                <>
                  <Route path="/" element={<UserHomepage />} />

                  <Route path="/SummaryConfirm" element={<SummaryConfirm />} />
                  <Route
                    path="/ConfirmedFlight"
                    element={<ConfirmedFlight />}
                  />
                  <Route path="/planeSeats" element={<PlaneSeats />} />
                  {(user.type && user.type === "user") &&<> <Route path="/ReservedFlights" element={<ReservedFlights /> } /> <Route path="/Payment" element={<Payment/>}/></>}
                </>
              )}
              {user.type && user.type === "user" && (
                <>
                  {" "}
                  <Route
                    path="/ReservedFlights"
                    element={<ReservedFlights />}
                  />
                </>
              )}

              {(user.type === "user" || user.type === "admin") && (
                <Route path="/UserProfile" element={<UserProfile />} />
              )}
            </Route>
            {(!user || user === {} || !user.token) && (
              <>
                <Route path="/forget" element={<ForgetPassword />}></Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
            <Route path="/*" element={<None />} />
            
              {(user.type && user.type === "user") && <Route path="/planeSeatsAfterEdit" element={<PlaneSeatsAfterEdit/>}/> }
              {(user.type && user.type === "user") && <Route path="/editDeparture" element={<EditDchoose/>}/> }
            

          </Routes>
        </Box>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
