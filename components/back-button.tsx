import router from "next/router"


export const backButton = () => {
    
    return (
        <div className="z-10 w-full mt-20 max-w-5xl items-center justify-between font-sans text-lg sm:flex lg:flex">
            <button className="left-1 -ml-12 mt-1 mb-10 flex text-white hover:italic xs:max-sm:ml-0" type="button" onClick={() => router.back()}>
              <span className="inline-block transition-transform group hover:-translate-x-1 motion-reduce:transform-none mr-1">
              &lt;</span>{' '} Back
            </button>
        </div>
    )

}

export default backButton