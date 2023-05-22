import {postsFileNames, postsPath } from "@/utils/mdxWorks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksList from "@/components/works/WorksList";
import TagFilter from "@/components/tag/TagFilter"
import { useEffect, useState } from "react";
import Layout from "@/components/Layout/layout";

export default function Works({ posts }) {
    const [selectedTag, setSelectedTag] = useState("all");

    console.log(posts);
    const allTagSet = posts.reduce((acc, posts) => {
        posts.frontmatter.tags.map((tag) => acc.add(tag));
        return acc;
    }, new Set([]));

    const allTagsArr = [...allTagSet].sort((a, b) => a.localeCompare(b));
    allTagsArr.unshift("all"); //allを先頭に追加
    console.log(allTagSet);

    return (
        <>
            <div className="bg-blue-100 pb-10">
                <div className="flex flex-wrap max-w-screen-xl bg-white mx-auto bg-white py-1 px-1 rounded-xl">
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
        },
    };
}
Works.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
