import React from "react";
import { postsFileNames, postsPath } from "@/utils/mdxWorks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksList from "@/components/works/WorksList"
import Layout from "@/components/Layout/layout";

export default function SingleSkilPage({posts,skils}) {
    console.log(Object.values(skils));
    console.log("出した");

    const filterPosts = posts.filter((post) =>
        post.frontmatter.tags.includes(...Object.values(skils))
    );
    
    return (
        <>

                <div className="flex flex-wrap max-w-screen-xl bg-white mx-auto bg-white py-1 px-1 rounded-xl">
                    <WorksList posts={filterPosts}></WorksList>
                </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const skils = params;
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
            skils: skils,
        },
    };
}

export async function getStaticPaths() {
    const posts = postsFileNames.map((slug) => {
        const content = fs.readFileSync(path.join(postsPath, slug));
        const { data } = matter(content);
        return {
            frontmatter: data
        };
    });
    const allTagSet = posts.reduce((acc, posts) => {
        posts.frontmatter.tags.map((tag) => acc.add(tag));
        return acc;
    }, new Set([]));

    console.log(allTagSet);

    //全てのカテゴリをslugにする
    const postsPaths = Array.from(allTagSet).map((slug) => ({
        params: {
            slug: slug,
        },
    }));

    return {
        paths: postsPaths,
        fallback: false,
    };
}
SingleSkilPage.getLayout = function getLayout(page) {
    return (
        <Layout skils={page.props.skils} >
            {page}
        </Layout>
    );
};
