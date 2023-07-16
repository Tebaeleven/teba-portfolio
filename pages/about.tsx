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
import { useEffect } from "react";
import tocbot from "tocbot";
import TextHeading from "@/components/mdx/TextHeading";
import Card from "@/components/card";
const MDXcomponents = {
    h1: (props) => <TextHeading level={1} {...props}></TextHeading>,
    h2: (props) => <TextHeading level={2} {...props}></TextHeading>,
    h3: (props) => <TextHeading level={3} {...props}></TextHeading>,
}
export default function About({ source }) {

    useEffect(() => {
        tocbot.init({
            tocSelector: ".toc",
            contentSelector: ".post",
            headingSelector: "h1, h2, h3",
        });
        return () => tocbot.destroy();
    }, []);

    return (
        <>
        <div className=" bg-blue-200">
            <div className=" w-7/12 p-5 m-auto flex justify-between">

                <article className=" w-9/12 mr-5">
                        <div className="post">
                    <Card>

                            <div className={mdxStyles.mdx}>

                                <MDXRemote {...source} components={MDXcomponents}></MDXRemote>
                            </div>
                    </Card>

                        </div>
                        

                </article>
                <aside className=" w-1/4">
                    <Card className={"sticky top-5 z-50 p-5"}>
                        <div className="toc"></div>
                    </Card>
                </aside>

            </div>

            </div>


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
