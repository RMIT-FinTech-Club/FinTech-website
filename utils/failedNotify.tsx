import { toast } from "react-toastify";

export default function failedNotify({message}: {message: string}) {
    toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        pauseOnHover: false,
        theme: "light",
    })
}
