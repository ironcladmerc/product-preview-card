import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-cream">
            <Head>
                <title>Product Preview Card Component</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            {/* Main Component */}
            <div className="container flex flex-col w-2/3 bg-white rounded-xl md:flex-row md:w-1/2 md:h-128">
                {/* Mobile Image */}
                <img
                    className="md:hidden rounded-t-xl"
                    src="/image-product-mobile.jpg"
                    alt=""
                />
                {/* Desktop image */}
                <img
                    className="hidden rounded-l-xl object-cover md:block md:w-1/2"
                    src="/image-product-desktop.jpg"
                    alt=""
                />
                {/* Details Div */}
                <div className="flex flex-col p-5 bg-white rounded-md md:w-1/2 md:p-10">
                    <h2 className="text-xs font-sans tracking-widest text-darkGrayishBlue">
                        PERFUME
                    </h2>
                    <h2 className="text-3xl tracking-tight leading-none font-serif mt-2 md:text-4xl">
                        Gabrielle Essence Eau De Parfum
                    </h2>
                    <p className="text-sm font-sans text-darkGrayishBlue leading-relaxed font-medium my-5">
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>
                    <div className="flex flex-row mx-left space-x-5 items-center my-1">
                        <div className="font-serif text-3xl text-darkCyan">
                            $149.99
                        </div>
                        <div className="font-serif text-xs line-through text-darkGrayishBlue">
                            $169.99
                        </div>
                    </div>
                    <div className="flex flex-row bg-darkCyan mt-2 p-3 mx-auto w-full rounded-md justify-center items-center space-x-5 cursor-pointer hover:bg-veryDarkCyan">
                        <img
                            src="/icon-cart.svg"
                            className="w-3 h-3"
                            alt="cart icon"
                        />
                        <div className=" text-white font-sans text-xs">
                            Add to Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
