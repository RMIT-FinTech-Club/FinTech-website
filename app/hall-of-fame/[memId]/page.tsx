"use client";
import axios from "@/app/api/(axios)/axios";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface Member {
	name: string;
	generation: string;
	position: string;
	birthdate: string;
	avatarURL?: string;
}

const Invidivual = ({ params }: { params: { memId: string } }) => {
	const imageUrl = "HallOfFame-Background.svg";

	const [member, setMember] = useState<Member>({} as Member);

	useEffect(() => {
		const fetchMember = async () => {
			axios
				.get(`/api/v1/members/${params.memId}`)
				.then((res) => res.data.json)
				.then((data) => {
					setMember({
						name: data.name,
						generation: data.generation,
						position: data.position,
						birthdate: data.birthdate,
						avatarURL: data.avatarURL,
					} as Member);
					// print member data
					console.log(data);
				})
				.catch((err) => {
					console.error(err);
				});
		};
		fetchMember();
	}, []);

	return (
		<section
			className=" relative bg-cover bg-center w-screen h-fit  pb-10 "
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			<div className=" mascot absolute right-0 bottom-0 z-0 max-w-44 md:max-w-96">
				<Image
					src="HallOfFame-FrontMasCot.svg"
					radius="none"
					id="HallOfFame-MasCot"
				/>
			</div>
			<div className=" absolute right-0 md:right-10 top-10 md:top-4 z-10 max-w-24 md:max-w-96">
				<Image src="HallOfFame-ClubLogo.svg" radius="none" />
			</div>
			<header className="flex z-10 mt-0 md:mt-10">
				<svg width="10%" height="100%" id="left-bar" aria-label="test">
					<title> Line bar </title>
					<line
						x1="0%"
						y1="80"
						x2="100%"
						y2="80"
						stroke="#FFFFFF"
						strokeWidth="110"
						id="white-line"
					/>
					<line
						x1="0"
						y1="80"
						x2="100%"
						y2="80"
						stroke="#DCB968"
						strokeWidth="90"
						id="yellow-line"
					/>
				</svg>
				<div className=" basis-2/12 w-full mx-3 md:mx-5 text-ft-text-bright content-center">
					<h1>HALL</h1>
					<div className="flex flex-row">
						<h4 className="-mt-2 md:mt-7">OF</h4>
						<h1 className="-mt-3 md:mt-10"> FAME</h1>
					</div>
				</div>
				<svg className=" basis-9/12" height="80%">
					<title> Line bar </title>
					<line
						x1="100%"
						y1="80"
						x2="0%"
						y2="80"
						stroke="#FFFFFF"
						strokeWidth="110"
						id="white-line"
					/>
					<line
						x1="100%"
						y1="80"
						x2="0%"
						y2="80"
						stroke="#DCB968"
						strokeWidth="90"
						id="yellow-line"
					/>
				</svg>
			</header>
			<main className=" flex flex-col gap-0 md:gap-8 mx-side-margin-mobile mt-0 md:mt-20 md:mx-side-margin lg:flex-row">
				<div className="items-center min-w-60 basis-1/3">
					<Image
						isBlurred
						src="/President.jpg"
						width={400}
						height={400}
					/>
				</div>
				<div className="items-start mt-4 basis-3/3 md:basis-2/3 md:mt-0 md:pr-40">
					<h3 className=" text-ft-primary-yellow-500 items-start mb-2">
						{member.name}
					</h3>
					<h5 className=" text-ft-text-bright mbb-2">
						MVP of My Heart
					</h5>

					<svg width="100%" height="10" aria-labelledby="Line">
						<title> Line </title>
						<line
							x1="0%"
							y1="50%"
							x2="100%"
							y2="50%"
							stroke="#DCB968"
							strokeWidth="4"
						/>
					</svg>
					<div className=" leading-none text-ft-text-bright">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Etiam imperdiet, tellus a aliquet vestibulum,
							dolor mi scelerisque sem, ac sagittis leo leo
							dignissim ligula. Curabitur dapibus ligula felis,
							tincidunt auctor felis imperdiet at. Sed euismod
							vitae nibh at tincidunt. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Mauris in posuere diam.
							Curabitur e yeu a Phuc magna, hendrerit ut lectus
							nec, tincidunt vestibulum felis. In justo ex, mollis
							sed dui vitae, consectetur efficitur dui. Donec in
							nisl viverra, sodales erat at, iaculis odio.
						</p>
					</div>
				</div>
			</main>
		</section>
	);
};

export default Invidivual;
