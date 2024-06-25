import Button from "./Button";

const BlogHero = () => {
  return (
    <>
      <div className="  bg-gradient-to-l from-[#EEF4F9] from-10% via-[#EAF7F5] via-30% to-[#EEF4F9] to-90% lg:pt-[60px] pt-10 lg:pb-[100px] md:pb-[60px] pb-10">
        <div className="container">
          <div>
            <h2 className=" text-[#002B4F] xl:text-[80px] md:text-[60px] !text-8 text-center lg:mt-[76px] md:mt-[60px] mt-0 md:leading-[90px] sm:leading-7 leading-11">
              READ INSIGHTFUL <span className="text-[#00A88E]">ARTICLES</span>
            </h2>
          </div>

          <div className=" flex items-center justify-center lg:mt-12 md:mt-8 mt-6">
            <div className="flex items-center max-w-[544px] w-full shadow rounded-lg">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m4-2a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <input
                  type="Search"
                  id="Search"
                  name="search"
                  className="bg-white py-2 px-4 ps-10 border-0 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 flex-1 sm:h-[56px] h-[48px]  w-full"
                  placeholder="Search"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHero;
