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
    },
    {
      id: 2,
      title: "Django Project Structure: A Comprehensive Guide",
      description:
        "In web development, crafting a seamless digital experience goes beyond writing code; it involves orchestrating a symphony of components to work harmoniously. One key orchestrator in this",
      link: "https://medium.com/django-unleashed/django-project-structure-a-comprehensive-guide-4b2ddbf2b6b8?source=user_profile---------1----------------------------",
      imgLink:
        "https://miro.medium.com/v2/resize:fill:112:112/1*w1eUXZYjfSuRsw24WA8FLA.jpeg",
    },
  ];
  return (
    <div className="min-h-screen">
      <h1 className="text-6xl  text-black p-16">Blog Posts</h1>
      <div className="p-20">
        <div className="h-fit w-full border border-white ">
          <div className="flex justify-center gap-3 items-center content-center flex-col">
            {posts.map((each) => (
              <div className="p-6 gap-5 flex max-h-[20vh] overflow-hidden justify-center rounded-lg border border-gray-300 bg-blue-200">
                <div className="max-w-[20em] flex flex-col justify-between content-between">
                  <h1 className="font-bold">{each.title}</h1>
                  <hr className="  "></hr>
                  <p className=" whitespace-normal text-left">
                    {`${each.description} `}
                    <a
                      className=" block animate-pulse"
                      target={each.link}
                      href={each.link}
                    >
                      ...
                    </a>
                  </p>
                </div>
                <img
                  className="border border-gray-200 rounded-lg shadow-lg object-cover"
                  loading="lazy"
                  src={each.imgLink}
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
