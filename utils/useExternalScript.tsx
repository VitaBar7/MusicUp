/* import { Dispatch, SetStateAction, useEffect } from 'react';

const useExternalScripts = (url: string, stateChanger?: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    const head = document.querySelector("head")
    const script = document.createElement("script")

    script.setAttribute("src", url)
    head?.appendChild(script)
    
    if (stateChanger) stateChanger(true)

    return () => {
      head?.removeChild(script)
    }
  }, [url])
}

export default useExternalScripts */