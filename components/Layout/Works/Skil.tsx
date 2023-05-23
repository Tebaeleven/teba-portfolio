import TagFilter from "@/components/tag/TagFilter";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Button
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export default function Layout({ skils, children, allTags }) {

    const allTagSet = allTags && allTags.reduce((acc, posts) => {
        posts.frontmatter.tags.map((tag) => acc.add(tag));
        return acc;
    }, new Set([]));

    const [selectedTag, setSelectedTag] = useState("all");
    const FrontEnd = [
        "HTML&CSS",
        "JavaScript",
        "jQuery",
        "React",
        "MDX",
    ];
    const BackEnd = [
        "Node.js",
        "Python",
        "Go",
        "Scala",
        "Java"
    ];
    const FrameWork = [
        "Next.js",
        "Express",
        "Laravel",
    ];

    const filterPosts = skils
        ? allTags.filter((post) =>
                post.frontmatter.tags.includes(...Object.values(skils))
            )
        : allTags;
    return (
        <>
            <div className="bg-blue-100 pb-10 px-4">
                <h1 className="text-4xl py-4 font-bold text-center ">
                    Works - {skils && skils ? Object.values(skils) : "作品一覧"}
                    ({filterPosts.length})
                </h1>
                {/* <div className="text-center pb-4">
                    <TagFilter
                        selectedTag={selectedTag}
                        setSelectedTag={setSelectedTag}
                        tags={["All", "Next.js", "MDX", "Node.js"]}
                    ></TagFilter>
                </div> */}
                <Card maxW="sm" className="mx-auto mb-4">
                    <CardBody>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            フロントエンド (
                                            {
                                                Array.from(allTagSet).filter(
                                                    (tag) =>
                                                        FrontEnd.includes(tag)
                                                ).length
                                            }
                                            )
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {allTagSet &&
                                        Array.from(allTagSet).map(
                                            (tag, index) => {
                                                if (FrontEnd.includes(tag)) {
                                                    return (
                                                        <Link
                                                            href={
                                                                "/works/skil/" +
                                                                tag
                                                            }
                                                            key={tag}
                                                        >
                                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                                                                {tag}
                                                            </span>
                                                        </Link>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            バックエンド (
                                            {
                                                Array.from(allTagSet).filter(
                                                    (tag) =>
                                                        BackEnd.includes(tag)
                                                ).length
                                            }
                                            )
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {allTagSet &&
                                        Array.from(allTagSet).map(
                                            (tag, index) => {
                                                if (BackEnd.includes(tag)) {
                                                    return (
                                                        <Link
                                                            href={
                                                                "/works/skil/" +
                                                                tag
                                                            }
                                                            key={tag}
                                                        >
                                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                                                                {tag}
                                                            </span>
                                                        </Link>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            フレームワーク (
                                            {
                                                Array.from(allTagSet).filter(
                                                    (tag) =>
                                                        FrameWork.includes(tag)
                                                ).length
                                            }
                                            )
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {allTagSet &&
                                        Array.from(allTagSet).map(
                                            (tag, index) => {
                                                if (FrameWork.includes(tag)) {
                                                    return (
                                                        <Link
                                                            href={
                                                                "/works/skil/" +
                                                                tag
                                                            }
                                                            key={tag}
                                                        >
                                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                                                                {tag}
                                                            </span>
                                                        </Link>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as="span"
                                            flex="1"
                                            textAlign="left"
                                        >
                                            全てのタグ (
                                            {allTagSet && allTagSet.size})
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    {allTagSet &&
                                        Array.from(allTagSet).map(
                                            (tag, index) => (
                                                <Link
                                                    href={"/works/skil/" + tag}
                                                    key={tag}
                                                >
                                                    <span
                                                        key={tag}
                                                        className=" bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                </Link>
                                            )
                                        )}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </CardBody>
                    <Link href="/works" className="mx-auto mb-4">
                        <Button colorScheme="green">一覧画面に行く</Button>
                    </Link>
                </Card>
                <main>{children}</main>
            </div>
        </>
    );
}
