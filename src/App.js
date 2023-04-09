import { Navigate, Route, Routes } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage, ChatsPage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import { Login, SignUp, RequireAuth } from "./Components";
import "./App.scss";

import { Layout } from "./Components";

const App = () => {
  return (
    <div className="App">
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
