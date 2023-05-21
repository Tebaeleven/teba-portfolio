import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useToast, Button } from "@chakra-ui/react";

export default function Home() {
  const toast = useToast();

  function ToastExample() {
    return (
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    );
  }

  return (
    <>
      <h1 className="text-4xl">テスト文字列</h1>
      <ToastExample />
    </>
  );
}



