import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/Lilcon";
import Link from "next/link";
const Details = ({ title, company, link, time, address, event, twitter }) => {
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
                {twitter && (
                    <Link
                        href={`${twitter}`}
                        target="_blank"
                        className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                        <svg
                            className="h-5 w-5"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </Link>
                )}
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
                        title="【会場開催】第81回CoderDojo久留米"
                        company="CoderDojo久留米"
                        link="https://coderdojo-kurume.connpass.com/event/287125/"
                        time="2023/06/25 15:00~18:00"
                        address="オフライン"
                        event="Mekurutoで開催されました。マイクラカップに向けての準備やプログラミング関連のサポートをしました。"
                        twitter=""
                    />
                    <Details
                        title="未踏福岡コンソーシアム説明会"
                        company="未踏福岡"
                        link="https://mitou-fukuoka.org/"
                        time="2023/06/11 15:00~18:00"
                        address="オフライン"
                        event="エンジニアカフェで開催された未踏福岡コンソーシアムの説明会に参加してきました。
                        "
                        twitter="https://twitter.com/Tebasaki_lab/status/1667849734718111744?s=20"
                    />
                    <Details
                        title="CoderDojo香椎第48回"
                        company="CoderDojo香椎"
                        link="https://coderdojo-kashii.connpass.com/event/285418/"
                        time="2023/06/11 9:00~12:00"
                        address="オフライン"
                        event="並木スクエアで開催されたCoderDojo香椎にメンターとして参加してきました。
                        "
                        twitter="https://twitter.com/Tebasaki_lab/status/1667703968242475008?s=20"
                    />
                </ul>
            </div>
        </>
    );
}
