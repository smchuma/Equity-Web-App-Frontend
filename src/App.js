import { Navigate, Route, Routes } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage, ChatsPage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import { Login, Navbar, SignUp, RequireAuth } from "./Components";
import "./App.scss";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { Layout } from "./Components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { state } = useAuth();

  useEffect(() => {
    const { accessToken } = state;
    accessToken ? setIsLoggedIn(true) : setIsLoggedIn(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {isLoggedIn && <Navbar />}
      <Routes>
        {/* pulbic routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* private routes */}
        <Route path="/" element={<Layout />}>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
