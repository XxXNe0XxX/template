const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 2,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 3,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 4,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 5,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 6,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
    {
      id: 7,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
    },
  ];
  return (
    <div className=" h-full  w-full">
      <ul className="no-scrollbar h-96  p-1 snap-x snap-mandatory w-[90vw] overflow-x-scroll  flex space-x-5   ">
        {blogPosts.map((each) => (
          <li className=" shadow-2xl  p-5 space-y-2 lg:min-w-[30vw] md:min-w-[20vw] sm:min-w-[15vw] min-w-fit border border-graytext rounded-xl snap-start flex flex-col ">
            <h1 className="font-bold lg:text-lg text-md line-clamp-2 font-serif">
              {each.title}
            </h1>
            <div className="w-full h-[1px] bg-graytext mx-auto"></div>
            <p className=" line-clamp-6 lg:text-base text-sm py-1 ">
              {each.description}
            </p>
          </li>
        ))}
      </ul>
      <p className=" w-full text-right animate-pulse lg:text-base text-xs">
        Scroll to see more...
      </p>
    </div>
  );
};

export default BlogPosts;
