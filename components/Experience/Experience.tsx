import React, { useRef } from "react";
import { motion,useScroll } from "framer-motion";
import LiIcon from "@/components/Lilcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 las-mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}></LiIcon>
            <motion.div
                initial={{ y:50 }}
                whileInView={{ y: 0 }}
                transition={{duration:0.5,type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp; <a href={companyLink} target="_blank" className="text-pink-600 capitalize">@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{work}</p>
            </motion.div>
        </li>
    );
}
export default function Exeperience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    )
    return (
        <>
            {/* <div className="my-64">
                <h2 className="font-bold text-8xl mb-32 w-full text-center">
                    Experience
                </h2>
            </div> */}
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    className="absolute bg-black left-9 top-1 w-[4px] h-full  origin-top"
                    style={{scaleY :scrollYProgress}}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position="プログラマー,講師"
                        company="ノ・マド"
                        companyLink="https://www.nomad.shijuku-fs.org/"
                        time="2022-10~"
                        address="remote"
                        work="マンツーマンでScratchのプログラミング授業。Scratchの教材を全て自作。"
                    />
                    <Details
                        position="プログラマー,スタッフ"
                        company="Kids Code Club"
                        companyLink="https://kidscodeclub.jp/"
                        time="2021-11~"
                        address="remote"
                        work="KidsCodeClubの放プロスタッフ、レシピ開発やScratch作品開発、アプリ開発などをしています。"
                    />
                </ul>
            </div>
        </>
    );
}
