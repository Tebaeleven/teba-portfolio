import React from "react";
import { postsPath,postsFileNames } from "@/utils/mdxWorks";
import { MDXRemote } from "next-mdx-remote";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxStyles from "@/components/mdx/mdx.module.css"
import rehypePrettyCode from "rehype-pretty-code";

export default function SingleWorksPage({ mdxSource }) {
    return (
        <>
            <div className="bg-blue-100">
                <div className="mx-auto max-w-screen-lg	py-4 px-4 md:px-8 ">
                    <div className={mdxStyles.mdx}>
                        <MDXRemote {...mdxSource}></MDXRemote>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const filePath = path.join(postsPath, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);
    const options = {
        // Use one of Shiki's packaged themes
        theme: "slack-dark",
        keepBackground: true,
        onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
            }
        },
        onVisitHighlightedLine(node) {
            // Each line node by default has `class="line"`.
            node.properties.className.push("highlighted");
        },
        onVisitHighlightedWord(node, id) {
            node.properties.className = ["word"];

            if (id) {
                // If the word spans across syntax boundaries (e.g. punctuation), remove
                // colors from the child nodes.
                if (node.properties["data-rehype-pretty-code-wrapper"]) {
                    node.children.forEach((childNode) => {
                        childNode.properties.style = "";
                    });
                }

                node.properties.style = "";
                node.properties["data-word-id"] = id;
            }
        },
    };
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [[rehypePrettyCode, options]],
        },
    });
    return {
        props: {
            mdxSource,
        },
    };
}

export async function getStaticPaths() {
    const postsPaths = postsFileNames.map((slug) => ({
        params: {
            slug: slug.replace(/\.mdx?$/, ""),
        },
    }));
    return {
        paths: postsPaths,
        fallback: false,
    };
}