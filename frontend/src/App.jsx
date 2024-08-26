import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Post from "./components/PostBlog";
import Update from "./components/Update";
import BlogBody from "./components/BlogDetail";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    
  }, [user, navigate]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/update/:blogId" element={<Update />} />
          <Route path="/blog/:id" element={<BlogBody />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

// Layout component that includes Header, Footer, and Outlet
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
