import Link from 'next/link'


export default function Navbar() {

    return (
        <>
        <div className="z-10 fixed whitespace-pre-wrap flex left-0 top-0 w-full items-center justify-between border-b border-gray-300 from-zinc-200 py-3 xs:max-sm:py-1.5 backdrop-blur-2xl">
            <Link href='/'>
                <h1 className="flex ml-6 font-medium text-white text-5xl tracking-wider xs:max-sm:text-3xl ">Look up! </h1>
            </Link>
            <ul className="flex flex-row flex-end gap-4 text-white mt-10 mr-10 hover:text-dirty-white">
                <Link href='/'><li className=" text-white hover:text-dirty-white">Home</li></Link>
                <Link href='/about'><li>About</li></Link>
                <Link href="/blog"><li>Blog</li></Link>
            </ul>  
      </div>
        </>
    )
}