import Image from "next/image";
import { Inter } from "next/font/google";
import { useToast, Button } from "@chakra-ui/react";
import Header from "@/components/Header/header";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";


export default function Home() {

    return (
        <>
            <Gallery></Gallery>
        </>
    );
}
