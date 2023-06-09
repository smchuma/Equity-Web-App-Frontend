import { Route, Routes } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import { Login, SignUp, RequireAuth, Page404, EventPage } from "./Components";
import "./App.scss";

import { Layout } from "./Components";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfilePage />}>
              <Route path="about" element={<About />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="chapters" element={<Chapters />} />
              <Route path="badges" element={<Badges />} />
              <Route path="events" element={<UserEvents />} />
            </Route>
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
