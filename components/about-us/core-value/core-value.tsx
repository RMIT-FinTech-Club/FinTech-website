import react from "react";

const CoreValue = () => {
    return (
        <div className="flex flex-col w-[70%] mx-auto">
            <h5 className="mx-auto mb-5">What we truly believe in ...</h5>
            <div className="w-full bg-yellow-400 rounded-xl p-10 relative">
    <div className="flex mb-5">
        <div className="w-1/2">
            <p className="text-2xl text-right">We believe in thinking outside of the box and challenging conventions. Being innovative is taking creative ideas and turning them into valuable things.</p>
        </div>
        <div className="w-1/2 flex items-center">
            <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
            <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
            <h5 className="ml-[5%] text-[100px]">INNOVATIVE</h5>
        </div>               
    </div>
    <div className="flex mb-5">
        <div className="w-1/2 flex flex-row-reverse items-center">
            <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
            <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
            <h5 className="text-right mr-[5%] text-[100px] text-ft-primary-blue-200">INCLUSIVE</h5>
        </div>
        <div className="w-1/2">
            <p className="text-2xl">We truly believe in fostering an inclusive community where all members feel appreciated, welcomed, and unexcluded from the club’s journey.</p>
        </div>
    </div>
    <div className="flex mb-5">
        <div className="w-1/3">
            
            <p className="text-2xl text-right mr-[5%]">We believe in building a club where members are inspired by their work and contributions.</p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
            <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
            <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
            <h5 className="text-[100px]">INSPIRING</h5>
        </div>
        <div className="w-1/3">
            <p className="text-2xl ml-[5%]">We believe in building a club where members are inspired by their work and contributions.</p>
        </div>
    </div>
</div>
        </div>
    );
};

export default CoreValue;