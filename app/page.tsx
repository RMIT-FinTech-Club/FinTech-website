import { Button } from "@nextui-org/button";
import Image from "next/image";
import Test from "./test";

export default function Home() {
	return (
		<main
			className="flex 
                min-h-screen flex-col 
                items-center gap-4 p-24"
		>
			<Button color="danger">TESTING</Button>

			<Image src="/vercel.svg" alt="logo" width={200} height={200} />
		</main>
	);
}
