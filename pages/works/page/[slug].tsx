import { postsFileNames, postsPath } from "@/utils/mdxWorks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksList from "@/components/Works/WorksList";
import Page from "@/components/Layout/Works/Page"
const itemsPerPage = 3

export default function SinglePagenationPage({ posts, page }) {
    const totalItems = posts.length;
    const currentPage = Number(...Object.values(page));

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    
    const selectedPosts = posts.slice(startIndex, endIndex);

    console.log(selectedPosts);
    console.log("絞った投稿");
    console.log(totalPages);
    console.log("合計ページ")
    return (
        <>
            <div className="bg-blue-100 pb-10 ">
                <h1 className="text-5xl text-center font-bold py-4">
                    ページ{...Object.values(page)}/{totalPages}
                </h1>
                <div className="flex flex-wrap max-w-screen-xl bg-white mx-auto  py-1 px-1 rounded-xl ">
                    <WorksList posts={selectedPosts}></WorksList>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const page = params;
    //postsFileNamesには全てのファイル名が入っているので、mapする
    const posts = postsFileNames.map((slug) => {
        //readFileSyncでpostsPathと各ファイル名を繋げたものを読み込む
        const content = fs.readFileSync(path.join(postsPath, slug));
        //gray-matterライブラリを使ってcontentからfrontmatter情報を読み込む
        const { data } = matter(content);
        return {
            frontmatter: data,
            slug: slug.replace(/\.mdx?$/, ""),
        };
    });
    return {
        props: {
            posts,
            page:page
        },
    };
}

export async function getStaticPaths() {
    const posts = postsFileNames.map((slug) => {
        //readFileSyncでpostsPathと各ファイル名を繋げたものを読み込む
        const content = fs.readFileSync(path.join(postsPath, slug));
        //gray-matterライブラリを使ってcontentからfrontmatter情報を読み込む
        const { data } = matter(content);
        return {
            frontmatter: data,
            slug: slug.replace(/\.mdx?$/, ""),
        };
    });
    const totalItems = posts.length;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    console.log("サーバー側で作るページ",totalPages);
    const postsPaths = [];
    for (let i = 1; i <= totalPages; i++) {
        postsPaths.push({
            params: {
                slug: String(i),
            },
        });
    }
    return {
        paths: postsPaths,
        fallback: false,
    };
}
SinglePagenationPage.getLayout = function getLayout(page) {
    return <Page posts={page.props.posts}>{page}</Page>;
};
