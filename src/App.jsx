import BlogHero from "./components/BlogHero";
import AllBlogs from "./components/AllBlogs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
        <div className="container m-auto">
          <BlogHero />
          <AllBlogs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
