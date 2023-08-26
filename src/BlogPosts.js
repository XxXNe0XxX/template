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
  ];
  return (
    <div>
      <div className="w-full overflow-hidden h-full">
        <ul className="overflow-scroll flex h-44  snap-x snap-mandatory">
          {blogPosts.map((each) => (
            <li className=" w-80 border border-black flex snap-start flex-col ">
              <h1>{each.title}</h1>
              <p>{each.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPosts;
