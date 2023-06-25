import Layout from "@/components/layout";
import { postsFileNames, postsPath } from "@/utils/mdxAbout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import mdxStyles from "@/components/mdx/mdx.module.css"
import rehypePrettyCode from "rehype-pretty-code";
import Experience from "@/components/Experience/Experience";
import BodyCard from "@/components/BodyCard";
export default function About({ source }) {
    return (
        <>
            <BodyCard>
                <div className={mdxStyles.mdx}>
                    <MDXRemote {...source}></MDXRemote>
                </div>
            </BodyCard>
        </>
    );
}

export async function getStaticProps() {
    const content = fs.readFileSync(path.join(postsPath, "about.mdx"));
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
            rehypePlugins: [[rehypePrettyCode,options]],
        },
    });
    return { props: { source: mdxSource } };
}
