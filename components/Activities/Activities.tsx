import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/Lilcon";
const Details = ({ title, company, link, time, address, event }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 las-mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
        >
            <LiIcon reference={ref}></LiIcon>
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {title}&nbsp;{" "}
                    <a
                        href={link}
                        target="_blank"
                        className="text-pink-600 capitalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-medium w-full">{event}</p>
            </motion.div>
        </li>
    );
};
export default function ActivitiesList() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <>
            <div className="my-32">
                <h2 className="font-bold text-8xl mb-32 w-full text-center">
                    Activities
                </h2>
            </div>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    className="absolute bg-black left-9 top-1 w-[4px] h-full  origin-top"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        title="未踏福岡コンソーシアム説明会"
                        company="未踏福岡"
                        link="https://mitou-fukuoka.org/"
                        time="2023/06/11 15:00~18:00"
                        address="オフライン"
                        event="エンジニアカフェで開催された未踏福岡コンソーシアムの説明会に参加してきました。
                        https://twitter.com/Tebasaki_lab/status/1667849734718111744?s=20"
                    />
                    <Details
                        title="CoderDojo香椎第48回"
                        company="CoderDojo香椎"
                        link="https://coderdojo-kashii.connpass.com/event/285418/"
                        time="2023/06/11 9:00~12:00"
                        address="オフライン"
                        event="並木スクエアで開催されたCoderDojo香椎にメンターとして参加してきました。
                        https://twitter.com/Tebasaki_lab/status/1667703968242475008?s=20"
                    />
                </ul>
            </div>
        </>
    );
}
