import Link from "next/link";
const ImageCard = ({ title, link, image }) => {
    return (
        <>
            {/* image - start */}
            <Link
                href={link}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 shadow-2xl"
            >
                <img
                    src={image}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {title}
                </span>
            </Link>
            {/* image - end */}
        </>
    );
};
export default function Gallery() {
    return (
        <>
            <div className="bg-blue-100 py-6 sm:py-8 ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
                        手羽先のポートフォリオサイト
                    </h2>

                    <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                        <ImageCard
                            title="About"
                            link="/about"
                            image="https://pbs.twimg.com/profile_images/1659863624163426305/AUZsJ_fs_400x400.jpg"
                        ></ImageCard>

                        <ImageCard
                            title="Works"
                            link="/works"
                            image="https://pbs.twimg.com/media/FwTKE1faMAMWZid?format=jpg&name=large"
                        ></ImageCard>

                        <ImageCard
                            title="Experience"
                            link="/experience"
                            image="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                        ></ImageCard>

                        <ImageCard
                            title="Activities"
                            link="/activities"
                            image="https://connpass-tokyo.s3.amazonaws.com/thumbs/6a/67/6a6786984f62d8297810c6785b46661c.png"
                        ></ImageCard>

                    </div>
                    <div className="flex items-start justify-between gap-8 sm:items-center">
                        <p className="max-w-screen-sm text-sm text-black lg:text-base">
                            Teba_elevenのポートフォリオサイトです！
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
