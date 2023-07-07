import Head from 'next/head'
import AboutThis from '../components/about-this'
import Navbar from '@component/components/navbar'


export default function About() {
    return (
        <>
        <Head>
        <title>Look up! - About</title>
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-between py-20 px-24 sm:px-8 xs:max-sm:px-4 xs:max-sm:w-full">
            <Navbar></Navbar>
            <div className="mt-16 mb-20 p-10 bg-dirty-white self-end rounded-lg  backdrop-blur-2xl text-center lg:mb-0 lg:text-left md:self-center xs:max-lg:self-center">
            
                <h2 className={`mb-3 text-2xl text-dark-grey opacity-80`}>
                    About this site:
                </h2>
                <p className={`m-0 text-sm font-light tracking-wide text-dark-grey opacity-80`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod omnis molestias minima quo sit. Itaque sed ipsa, porro optio quis amet totam necessitatibus recusandae, et provident deserunt mollitia maxime facere?

                    Lorem ipsum dolor sit amet. Aut tempore deleniti sed pariatur impedit sed ipsum aliquam sed laboriosam alias. Cum quia impedit eum voluptas voluptatem qui quia optio! Ea quidem dolore et reiciendis laborum ut iste magni. Quo reprehenderit galisum vel fuga incidunt et molestiae laboriosam et voluptas dignissimos.

                    Eum placeat perferendis ut magnam enim qui perferendis magnam et sint quia sed enim autem sed eligendi voluptatem a expedita quod. Ut maxime voluptatem sed optio necessitatibus ex internos fuga 33 dolor praesentium? Est architecto atque ut deleniti dolores sed omnis doloribus aut quia saepe.

                    Cum ullam quia et necessitatibus aperiam et fuga incidunt eos similique minima et error obcaecati. Cum eaque officiis et molestiae Quis ea perferendis nobis quo omnis velit et cupiditate eius. Et itaque recusandae qui iure sapiente 33 dolorem quia aut impedit natus hic pariatur consequuntur est illo neque ut repudiandae illum.
                </p>
            
            </div>
            <AboutThis/>
        </main>
        </>
    )
}