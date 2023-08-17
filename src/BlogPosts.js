import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title:
        "Interactive API Documentation with Django Rest Framework and Swagger",
      description:
        "In the realm of API development, documentation plays a critical role in helping developers understand and effectively utilize available",
      link: "https://medium.com/django-unleashed/interactive-api-documentation-with-django-rest-framework-and-swagger-29222251ede8?source=user_profile---------0----------------------------",
      imgLink:
        "https://miro.medium.com/v2/resize:fill:112:112/1*OqqzmP4xTCz2uiHSAhEfLw.png",
      animationDelay: 0.2,
    },
    {
      id: 2,
      title: "Django Project Structure: A Comprehensive Guide",
      description:
        "In web development, crafting a seamless digital experience goes beyond writing code; it involves orchestrating a symphony of components to work harmoniously. One key orchestrator in this",
      link: "https://medium.com/django-unleashed/django-project-structure-a-comprehensive-guide-4b2ddbf2b6b8?source=user_profile---------1----------------------------",
      imgLink:
        "https://miro.medium.com/v2/resize:fill:112:112/1*w1eUXZYjfSuRsw24WA8FLA.jpeg",
      animationDelay: 0.4,
    },
    {
      id: 2,
      title: "Django Project Structure: A Comprehensive Guide",
      description:
        "In web development, crafting a seamless digital experience goes beyond writing code; it involves orchestrating a symphony of components to work harmoniously. One key orchestrator in this",
      link: "https://medium.com/django-unleashed/django-project-structure-a-comprehensive-guide-4b2ddbf2b6b8?source=user_profile---------1----------------------------",
      imgLink:
        "https://miro.medium.com/v2/resize:fill:112:112/1*w1eUXZYjfSuRsw24WA8FLA.jpeg",
      animationDelay: 0.6,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 p-6">
      <h1 className="text-5xl  text-white font-roboto tracking-tight p-16">
        Blog Posts
      </h1>

      <div className="h-fit lg:p-12 w-full border border-black ">
        <div className="flex lg:p-6 flex-wrap justify-center w-fit mx-auto gap-5 items-center content-center  ">
          {posts.map((each) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: each.animationDelay }}
              viewport={{ once: true }}
              key={each.id}
              className="group relative p-4 hover: text-sm row-span-full max-h-[30vh] min-h-[10vh] lg:auto-rows-auto w-full lg:w-[30vw]   lg:text-base  transition-all gap-5 mx-auto  flex overflow-hidden justify-between   rounded-lg border-2 border-gray-300  backdrop-blur-sm "
            >
              <div className="absolute group-hover  opacity-0 group-hover:opacity-100 transition-all text-white bg-yellow-500 content-center top-0 w-full right-0 flex justify-end h-full">
                <a
                  className="self-center whitespace-normal mr-6 text-right text-black font-medium "
                  href={each.link}
                  target={each.link}
                >
                  <p className=" ">
                    Read More{" "}
                    <IoMdArrowForward className="inline self-center mb-1" />
                  </p>
                </a>
              </div>

              <div className="w-full flex backdrop-blur-2xl overflow-hidden rounded-lg flex-col justify-between content-between">
                <h1 className="py-2 border border-yellow-500 bg-gray-800 rounded-md my-2 p-2 h-15 font-roboto text-white">
                  {each.title}
                </h1>
                <div className="h-[1px]  rounded-lg bg-gray-300 w-full"> </div>
                <p className=" h-20  no-scrollbar overflow-y-auto scroll-auto whitespace-normal text-white text-left">
                  {`${each.description} `}
                </p>
              </div>
              <img
                className="border   border-gray-200  rounded-lg shadow-lg object-cover"
                loading="lazy"
                src={each.imgLink}
              ></img>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
