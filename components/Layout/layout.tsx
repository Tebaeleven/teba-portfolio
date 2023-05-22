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
export default function Layout({ skils, children, posts }) {
    console.log(posts);
    console.log("dada");
    const [selectedTag, setSelectedTag] = useState("all");
    const FrontEnd = ["HTML&CSS", "JavaScript", "jQuery", "React", "MDX"];
    const BackEnd = ["Node.js", "Python"];
    const FrameWork = ["Next.js", "Express"];
    return (
        <>
            <div className="bg-blue-100 pb-10">
                <h1>レイアウトの始まり</h1>
                <h1 className="text-4xl py-4 font-bold text-center ">
                    Works - {skils && skils ? Object.values(skils) : "作品一覧"}
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
                                            フロントエンド
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {FrontEnd.map((tag, index, tags) => (
                                        <Link
                                            href={"/works/skil/" + tag}
                                            key={tag}
                                        >
                                            <span
                                                key={tag}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                            >
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
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
                                            バックエンド
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {BackEnd.map((tag, index, tags) => (
                                        <Link
                                            href={"/works/skil/" + tag}
                                            key={tag}
                                        >
                                            <span
                                                key={tag}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                            >
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
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
                                            フレームワーク
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {FrameWork.map((tag, index, tags) => (
                                        <Link
                                            href={"/works/skil/" + tag}
                                            key={tag}
                                        >
                                            <span
                                                key={tag}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                            >
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
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
                                            全てのタグ
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {BackEnd.map((tag, index, tags) => (
                                        <Link
                                            href={"/works/skil/" + tag}
                                            key={tag}
                                        >
                                            <span
                                                key={tag}
                                                className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                            >
                                                {tag}
                                            </span>
                                        </Link>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </CardBody>
                    <Link href="/works" className="mx-auto mb-4">
                        <Button colorScheme="green">一覧画面に行く</Button>
                    </Link>
                </Card>

                <main>{children}</main>

                <h1>レイアウト終わり</h1>
            </div>
        </>
    );
}
