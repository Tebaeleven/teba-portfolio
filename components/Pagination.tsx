import Link from "next/link";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Pagination({ currentPage, totalPages }) {
    const router = useRouter();

    return (
        <>
            <div className="text-center">
                <p>
                    {currentPage} / {totalPages}
                </p>
                {currentPage > 1 ? (
                    <>
                        <Link
                            href={{
                                pathname: router.pathname,
                                query: {
                                    ...router.query,
                                    page: currentPage - 1,
                                },
                            }}
                        >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                戻る
                            </button>
                        </Link>
                    </>
                ) : (
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 ">
                        戻る
                    </button>
                )}
                {currentPage < totalPages ? (
                    <>
                        <Link
                            href={{
                                pathname: router.pathname,
                                query: {
                                    ...router.query,
                                    page: currentPage + 1,
                                },
                            }}
                        >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                進む
                            </button>
                        </Link>
                    </>
                ) : (
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 ">
                        進む
                    </button>
                )}
            </div>
        </>
    );
}

export default Pagination;
