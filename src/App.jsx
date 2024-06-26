// import BlogHero from "./components/BlogHero";
// import AllBlogs from "./components/AllBlogs";
// import Footer from "./components/Footer";
// import Header from "./components/Header/Header";

import BlogHero from "./components/BlogHero";
import BlogTags from "./components/BlogTags";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import BlogCardList from "./components/BlogCardList";

// function App() {
//   return (
//     <>
//       <Header />
//       <div className=" bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
//         <div className="container m-auto">
//           <BlogHero />
//           <AllBlogs />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

export default function App() {
  return (
    <main>
      <Header />

      <div className="bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90%">
        <BlogHero />
        <h1 className="text-[48px] text-center font-circular font-bold leading-[60px] tracking-[-0.5px] uppercase text-primary-blue">
          ALL <span className="text-primary-green">BLOGS</span>
        </h1>
        <BlogTags />
        <BlogCardList />
      </div>

      <Footer />
    </main>
  );
}
