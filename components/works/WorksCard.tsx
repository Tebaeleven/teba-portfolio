import Link from "next/link";
export default function WorksCard({ post }) {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-4 my-4">
                <a href="#">
                    <img
                        className="rounded-t-lg"
                        src={post.frontmatter.cover}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <Link href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            {post.frontmatter.title}
                        </h5>
                    </Link>
                    {post.frontmatter.tags && (
                        <p>
                            タグ：
                            {post.frontmatter.tags.map((tag, index, tags) => (
                                <span
                                    key={tag}
                                    className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </p>
                    )}
                    <p className="mb-3 font-normal text-gray-700 ">
                        {post.frontmatter.date}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 ">
                        {post.frontmatter.desc}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}