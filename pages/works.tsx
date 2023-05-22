import { postsFileNames, postsPath } from "@/utils/mdxWorks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksList from "@/components/works/worksList";

export default function Works({ posts }) {
    console.log(posts)
    return (
        <>
            <div className="bg-blue-100">
                <h1 className="text-4xl font-bold text-center ">
                    Works - 作品一覧
                </h1>
                <div className="flex flex-column max-w-screen-xl bg-white mx-auto">
                    <WorksList posts={posts}></WorksList>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    //postsFileNamesには全てのファイル名が入っているので、mapする
    const posts = postsFileNames.map((slug) => {
        //readFileSyncでpostsPathと各ファイル名を繋げたものを読み込む
        const content = fs.readFileSync(path.join(postsPath,slug));
        //gray-matterライブラリを使ってcontentからfrontmatter情報を読み込む
        const { data } = matter(content);
        return {
            frontmatter: data,
            slug,
        };
    });
    return {
        props: {
            posts,
        },
    };
}