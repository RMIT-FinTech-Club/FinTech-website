"use client";
import { Image } from "@nextui-org/image";
import { Checkbox, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { EyeFilledIcon } from "./components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./components/EyeSlashFilledIcon";

const LoginPage = () => {
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const toggleVisibility = () => setVisible(!visible);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 bg-white min-h-full max-w-full h-screen">
			<div className="col-span-0 flex flex-col md:col-span-1 mx-auto">
				<img
					src="loginPage/Logo.svg"
					loading="lazy"
					className="text-center w-4/12 md:w-10/12 mx-auto my-auto"
					alt="Club Logo"
					aria-label="logo"
				/>
			</div>
			<div className="col-span-1 flex flex-col justify-center text-center align-middle">
				<h2 className=" text-ft-primary-blue-500 mb-10 mt-7 md:mt-0">
					Admin Login
				</h2>
				<form action="" className="flex flex-col mx-10 md:mx-20 gap-5">
					<Input
						value={email}
						onValueChange={setEmail}
						classNames={{
							label: "text-black font-bold dark:text-black",
							input: [
								"bg-transparent",
								"text-black dark:text-black",
								"placeholder:text-black dark:placeholder:text-black",
								"placeholder:font-bold dark:placeholder:font-bold",
								"group-data-[has-value=true]:text-black",
								"dark:group-data-[has-value=true]:text-black",
							],
							innerWrapper: "bg-transparent",
							inputWrapper: [
								"font-bold",
								"bg-gray-200",
								"dark:bg-gray-200",
								"hover:bg-gray-200",
								"dark:hover:bg-gray-200",
								"group-data-[focus=true]:bg-gray-200",
								"group-data-[has-value=true]:text-black",
								"dark:group-data-[focus=true]:bg-gray-200",
								"dark:group-data-[has-value=true]:text-black",
								"!cursor-text",
							],
						}}
						isRequired
						type="text"
						placeholder="Email"
						radius="md"
						size="lg"
						startContent={
							<i className=" text-ft-primary-blue-500">
								<svg
									aria-label="email icon"
									xmlns="http://www.w3.org/2000/svg"
									width="28"
									height="28"
									viewBox="0 0 24 24 "
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
								>
									<title>email icon</title>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
									<path d="M3 7l9 6l9 -6" />
								</svg>
							</i>
						}
					/>
					<Input
						value={password}
						onValueChange={setPassword}
						classNames={{
							label: "text-black font-bold dark:text-black",
							input: [
								"bg-transparent",
								"text-black dark:text-black",
								"placeholder:text-black dark:placeholder:text-black",
								"placeholder:font-bold dark:placeholder:font-bold",
								"group-data-[has-value=true]:text-black",
								"dark:group-data-[has-value=true]:text-black",
							],
							innerWrapper: "bg-transparent font-bold",
							inputWrapper: [
								"font-bold",
								"bg-gray-200",
								"dark:bg-gray-200",
								"hover:bg-gray-200",
								"dark:hover:bg-gray-200",
								"group-data-[focus=true]:bg-gray-200",
								"group-data-[has-value=true]:text-black",
								"dark:group-data-[focus=true]:bg-gray-200",
								"dark:group-data-[has-value=true]:text-black",
								"!cursor-text",
							],
						}}
						isRequired
						type={visible ? "text" : "password"}
						placeholder="Password"
						radius="md"
						size="lg"
						startContent={
							<i className=" text-ft-primary-blue-500">
								<svg
									aria-label="password icon"
									xmlns="http://www.w3.org/2000/svg"
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="icon icon-tabler icons-tabler-outline icon-tabler-key"
								>
									<title>password icon</title>
									<path
										stroke="none"
										d="M0 0h24v24H0z"
										fill="none"
									/>
									<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
									<path d="M15 9h.01" />
								</svg>
							</i>
						}
						endContent={
							<button
								className="focus:outline-none"
								type="button"
								onClick={toggleVisibility}
							>
								{visible ? (
									<svg
										aria-label="eye-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
									>
										<title>eye-icon</title>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
										<path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
									</svg>
								) : (
									<svg
										aria-label="eye-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off"
									>
										<title>eye-icon</title>
										<path
											stroke="none"
											d="M0 0h24v24H0z"
											fill="none"
										/>
										<path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
										<path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
										<path d="M3 3l18 18" />
									</svg>
								)}
							</button>
						}
					/>
					<Checkbox
						defaultSelected
						className=" text-start text-black"
					>
						<span className="text-black">Remember me</span>
					</Checkbox>
					<Button
						type="submit"
						size="lg"
						className=" bg-ft-primary-yellow-500 py-5 w-full rounded-lg text-white"
					>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
