import { Route, Routes, useLocation } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage, ChatsPage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import { Login, Navbar, SidebarComp, SignUp, RequireAuth } from "./Components";
import "./App.scss";
import PersistLogin from "./Miscellaneous/PersistLogin/PersistLogin";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <SidebarComp id="123" />
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
      </Routes>
    </div>
  );
};

export default App;
