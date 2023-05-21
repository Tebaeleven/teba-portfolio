import Layout from "@/components/layout";
import { postsFileNames, postsPath } from "@/utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import mdxStyles from "@/components/mdx/mdx.module.css"
import rehypePrettyCode from "rehype-pretty-code";

export default function About({ source }) {
    return (
        <>
            <div className="bg-white ">
                <div className="mx-auto max-w-screen-xl	 px-4 md:px-8">
                    <div className={mdxStyles.mdx}>
                        <MDXRemote {...source}></MDXRemote>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const content = fs.readFileSync(path.join(postsPath, "pages/about.mdx"));
    const options = {
        // Use one of Shiki's packaged themes
        theme: "dark-plus",
        keepBackground: true,
    };
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [[rehypePrettyCode,options]],
        },
    });
    return { props: { source: mdxSource } };
}
