'use client'
import { fontSans } from "@/config/fonts";
import { useForm, SubmitHandler } from "react-hook-form"
import { IconCloudUpload } from '@tabler/icons-react';

interface IFormInput {
    title: string
    author: string
    description: string
    publisher: string
    publicationDate: string
}

export default function PodcastForm() {
    const { register, handleSubmit } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <>
            <div className=" w-full border-b-1 border-zinc-300">
                <div className={`text-center text-black text-2xl font-semibold ${fontSans.style} tracking-tight m-2`}>New research</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-[600px] mx-auto mt-6 px-6 mb-8">
                <div className="grid grid-flow-row auto-rows-max gap-7">
                    <div className={` h-auto text-black text-4xl font-semibold ${fontSans.style}`}>
                        Research details
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="px-1.5 justify-start items-center inline-flex">
                            <div className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}>Title</div>
                            <div className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}>*</div>
                        </div>
                        <input {...register("title")} className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex" />
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="px-1.5 justify-start items-center inline-flex">
                            <div className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}>Author</div>
                            <div className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}>*</div>
                        </div>
                        <input {...register("author")} className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex" />
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="px-1.5 justify-start items-center inline-flex">
                            <div className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}>Description</div>
                            <div className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}>*</div>
                        </div>
                        <textarea {...register("description")} className="self-stretch p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex" />
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="px-1.5 justify-start items-center inline-flex">
                            <div className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}>Publisher</div>
                            <div className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}>*</div>
                        </div>
                        <input {...register("publisher")} className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex" />
                    </div>
                    <div className="flex-col justify-center items-start gap-2 inline-flex">
                        <div className="px-1.5 justify-start items-center inline-flex">
                            <div className={`text-center text-black text-lg font-normal ${fontSans.style} tracking-wide`}>Publication date</div>
                            <div className={`text-center text-rose-700 text-lg font-normal ${fontSans.style} tracking-wide`}>*</div>
                        </div>
                        <input {...register("publicationDate", { pattern: /^\d{2}-\d{2}-\d{4}$/ })} className="self-stretch h-10 p-2 rounded-lg border border-zinc-300 justify-start items-center gap-2.5 inline-flex" placeholder="DD-MM-YYYY" />
                    </div>
                    <div className={`text-black text-4xl font-semibold ${fontSans.style}`}>
                        Research Paper
                        <p className=" leading-relaxed">
                            Upload a pdf file of your research paper here to be downloaded by user when they visit this research page
                        </p>

                    </div>
                    <div className="row-span-2 p-3 rounded-lg border-dashed border border-zinc-300 flex-col justify-center items-center gap-3 inline-flex">
                        <div className="w-12 h-12 relative" >
                            <IconCloudUpload stroke={2} width={50} height={50} />
                        </div>
                        <div className="text-center"><span className={`text-orange-300 text-lg font-normal ${fontSans.style} tracking-wide`}>Click</span><span className={`text-black text-lg font-normal ${fontSans.style} tracking-wide`}> to browse your computer or drag pdf file to this area </span></div>
                        <div className={`text-center text-zinc-300 text-lg font-normal ${fontSans.style} tracking-wide`}>(Max. File size: 25MB)</div>
                    </div>
                </div>
            </form>
        </>
    )
}