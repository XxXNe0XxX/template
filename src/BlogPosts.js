const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FZAX9qv99Xc_RmcwpB-bXA.png",
    },
    {
      id: 2,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:640/format:webp/1*OqqzmP4xTCz2uiHSAhEfLw.png",
    },
    {
      id: 3,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*w1eUXZYjfSuRsw24WA8FLA.jpeg",
    },
    {
      id: 4,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FZAX9qv99Xc_RmcwpB-bXA.png",
    },
    {
      id: 5,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FZAX9qv99Xc_RmcwpB-bXA.png",
    },
    {
      id: 6,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FZAX9qv99Xc_RmcwpB-bXA.png",
    },
    {
      id: 7,
      title:
        "Aliquip aliquip amet irure in enim et sint ullamco exercitation in aute irure.",
      description:
        "In cupidatat enim et exercitation tempor est. Minim exercitation dolore ipsum laborum. Lorem sint in dolor ex laborum consequat excepteur ipsum aute veniam tempor voluptate. In officia quis aute cillum quis id enim aliqua. Quis laboris velit aute nisi. Ut et ut eiusmod amet ad irure aliqua eu ut pariatur dolore sit mollit ullamco.",
      imgLink:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FZAX9qv99Xc_RmcwpB-bXA.png",
    },
  ];
  return (
    <div className=" h-full md:w-full w-[90vw]">
      <ul className="no-scrollbar h-96  p-1  w-full overflow-x-scroll  flex space-x-5   ">
        {blogPosts.map((each) => (
          <li className=" shadow-2xl backdrop-blur-sm px-5 space-y-2 lg:min-w-[30vw] md:min-w-[20vw] sm:min-w-[15vw] min-w-fit border border-graytext rounded-xl flex flex-col  ">
            <div className="overflow-hidden object-cover h-40 flex justify-center items-center content-center">
              <img src={each.imgLink}></img>
            </div>
            <h1 className="font-bold lg:text-lg text-md line-clamp-2 font-serif">
              {each.title}
            </h1>
            <div className="w-full h-[1px] bg-graytext mx-auto"></div>
            <p className=" line-clamp-6 lg:text-thin text-sm py-1 ">
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
