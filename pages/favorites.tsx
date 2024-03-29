import Favorites from '@component/components/favorites'
import Navbar from '@component/components/navbar'
import Head from 'next/head'

export default function Favs() {

    return (
        <>
        <Head>
        <title>SongSeeker - Favorites</title>
        </Head>
        
        <main className="flex min-h-screen md:px-24 lg:px-28 xl:px-32 2xl:px-36 py-4 flex-col items-center xs:px-2">
            <Navbar/>
            <div className="mt-20">
                <Favorites/>

            </div>

        </main>
        </>
    )
}