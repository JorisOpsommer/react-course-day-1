import { List } from "./components";
import Nav from "./views/nav/Nav";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./views/404/PageNotFound";
import { DetailsView } from "./views/details-view/DetailsView";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<DetailsView />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
