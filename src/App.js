import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage, ChatsPage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import {
  Login,
  Navbar,
  SidebarComp,
  SignUp,
  RequireAuth,
  Page404,
} from "./Components";
import "./App.scss";
import PersistLogin from "./Miscellaneous/PersistLogin/PersistLogin";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  const location = useLocation();
  const { state } = useAuth();

  useEffect(() => {
    const { accessToken } = state;
    accessToken ? setIsLoogedIn(true) : setIsLoogedIn(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {isLoggedIn && (
        <>
          <Navbar />
          <SidebarComp />
        </>
      )}

      <Routes>
        {/* pulbic routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* private routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />}>
              <Route path="about" element={<About />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="chapters" element={<Chapters />} />
              <Route path="badges" element={<Badges />} />
              <Route path="events" element={<UserEvents />} />
            </Route>
            <Route path="/events" element={<Events />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/chats" element={<ChatsPage />} />
          </Route>
        </Route>
        {/* catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
