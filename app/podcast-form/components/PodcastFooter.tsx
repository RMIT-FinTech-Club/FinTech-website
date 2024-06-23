import { Button } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { DisabledButtonContext } from "./context/DisableButtonContext";

const PodcastFooter:React.FC<{focusIndex:number, setFocusIndex:any}> = ({focusIndex, setFocusIndex})=>{
    const {isDisabled, setIsDisabled} = useContext(DisabledButtonContext);
    useEffect(()=>{
        console.log(`is Disabled: ${isDisabled}`)
    }, [isDisabled])
    function handleCancel(){

    }
    function handleBack(){
        setFocusIndex(focusIndex - 1);
        setIsDisabled(true);
    }
    function handleSubmit(){

    }
    function handleContinue(){
        setFocusIndex(focusIndex + 1);
        setIsDisabled(true);
    }
    return(
        <section className="w-full py-10 flex justify-end gap-2 mt-20 border-t-1 border-gray-300">
            <Button onClick={focusIndex===1?handleCancel:handleBack}  className="bg-white border-1 border-black px-10" >{focusIndex===1?"Cancel":"Back"}</Button>
            <Button onClick={focusIndex==3?handleSubmit:handleContinue}  className="bg-ft-primary-blue-600 text-white px-10" isDisabled={isDisabled} >{focusIndex===3?"Submit":"Continue"}</Button>
        </section>
    );
}
export default PodcastFooter;