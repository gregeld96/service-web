import type { NextPage } from 'next'
import Head from 'next/head';

const SuccessMidtrans: NextPage = () => {
    return (
        <>
            <Head>
                <title>Montero - Midtrans Success</title>
                <meta property="og:title" content="Midtrans Success" key="Modtrans" />
            </Head>
            <div className='grid justify-center content-center h-screen'>
                <div className="text-center lg:text-3xl md:text-3xl sm:text-2xl font-bold container mb-4">
                    Transaksi Berhasil!
                </div>
                <div className="xl:max-w-xl lg:max-w-xl md:max-w-md sm:max-w-sm px-3 lg:text-xl sm:text-sm align-middle text-center mt-2 container">
                    Transaksi pembayaran anda berhasil silahkan menunggu proses lanjutan dari piahk Montero. Jika ada pertanyaan, silahkan mengklik tombol dibawah.
                </div>
                <div className='text-center mt-5'>
                    <a href="tel:+6281284585765">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white xl:text-lg lg:text-lg md:text-md sm:text-md font-bold py-2 px-4 rounded-full">
                            Hubungi Kami
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default SuccessMidtrans;