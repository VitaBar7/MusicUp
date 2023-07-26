import { useRouter } from "next/navigation"


export const BackButton = () => {
    const router = useRouter() 
    return (
    <>
    <button 
    className={`self-start mb-2 ml-2 backdrop-blur-2xl rounded-full font-light flex text-white text-xl hover:italic`} type="button"  
    onClick={() => router.refresh()}>
        <span className="inline-block mr-2 transition-transform group hover:-translate-x-1 motion-reduce:transform-none">&lt;</span>{' '}Back
    </button>
    </>
    )   

}

export default BackButton