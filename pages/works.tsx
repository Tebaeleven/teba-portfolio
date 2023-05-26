import { postsFileNames, postsPath } from "@/utils/mdxWorks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksList from "@/components/Works/WorksList";
import TagFilter from "@/components/tag/TagFilter";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Works/Skil";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

export default function Works({ posts }) {
    const postPerPage = 3;
    const [currentPage, setCurrentPage] = useState(null);
    const [selectedTag, setSelectedTag] = useState(null);
    const [filterPosts, setFilterPosts] = useState(posts);
    const [totalPages, setTotalPages] = useState(1); // totalPagesの状態を追加

    const router = useRouter();

    const allTagSet = posts.reduce((acc, posts) => {
        posts.frontmatter.tags.map((tag) => acc.add(tag));
        return acc;
    }, new Set([]));

    //アルファベット順にソート
    const allTagsArr = [...allTagSet].sort((a, b) => a.localeCompare(b));
    //allを先頭に追加
    allTagsArr.unshift("all");
    useEffect(() => {
        setSelectedTag(router.query.skil || "all");
        console.log("router.query.skil:", router.query.skil);
    }, [router.query.skil]);
    useEffect(() => {
        const page = parseInt(router.query.page, 10) || 1;
        setCurrentPage(page);

        let tempPosts = [...posts];
        if (selectedTag && selectedTag !== "all") {
            tempPosts = posts.filter((post) =>
                post.frontmatter.tags.includes(selectedTag)
            );
        }
        const start = (page - 1) * postPerPage;
        const end =
            start + postPerPage > tempPosts.length
                ? tempPosts.length
                : start + postPerPage;
        const paginatedPosts = tempPosts.slice(start, end);
        setFilterPosts(paginatedPosts);
        // totalPagesを更新
        const newTotalPages =
            selectedTag === "all"
                ? Math.ceil(posts.length / postPerPage)
                : Math.ceil(tempPosts.length / postPerPage);
        setTotalPages(newTotalPages);
    }, [selectedTag, posts, router]);






    return (
        <>
            <div className="bg-blue-100 pb-10">
                <div className="flex flex-wrap max-w-screen-xl bg-white mx-auto  py-1 px-1 rounded-xl ">
                    <WorksList posts={filterPosts}></WorksList>
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                ></Pagination>
            </div>
        </>
    );
}

export async function getStaticProps() {
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
    console.log(posts)
    return {
        props: {
            posts,
        },
    };
}
// Works.getLayout = function getLayout(page) {
//     return <Layout allTags={page.props.posts}>{page}</Layout>;
// };
Works.getLayout = function getLayout(page) {
    return (
        <Layout allTags={page.props.posts} skils={page.props.skils}>
            {page}
        </Layout>
    );
};