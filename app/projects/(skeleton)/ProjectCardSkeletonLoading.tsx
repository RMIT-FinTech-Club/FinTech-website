import { Card, Skeleton } from "@nextui-org/react";

const ProjectCardSkeletonLoading = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 bg-ft-background shadow-lg rounded-lg p-4 w-full h-72 space-x-11">
                <Skeleton className="rounded-lg">
                    <div className=" h-60 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="md:inline-block hidden space-y-2 md:mt-0 mt-6">
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-3 w-full rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-3 w-full rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-full rounded-lg">
                        <div className="h-3 w-full rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>
            </div>
        </>
    )
}

export default ProjectCardSkeletonLoading;