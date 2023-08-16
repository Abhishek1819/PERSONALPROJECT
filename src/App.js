import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import WriteRecommendation from "./WriteRecommendation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import ProjectPage from "./ProjectPage";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import AddProject from "./AddProject";
import { Provider } from "./context";
import AllProjects from "./AllProjects";
import AddBlog from "./AddBlog";
import AllBlogs from "./AllBlogs";
import ScrollToTop from "./ScrollToTop";
// import Test from "./Test";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/write-a-recommendation"
            component={WriteRecommendation}
          />
          <Route exact path="/allProjects" component={AllProjects} />
          <Route exact path="/allBlogs" component={AllBlogs} />
          <Route exact path="/project/add" component={AddProject} />
          <Route exact path="/blog/add" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
