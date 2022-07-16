import Header from "../components/Header";
import imageLogo from "../assets/WhatsApp Image 2022-07-16 at 16.04.45.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const buttonClick = () => {
    window.location.href = "https://www.mercadopago.com.br/payment-link/v1/redirect?preference-id=386532599-e60f0e33-8e20-4e57-a4af-d4b1af991e21&source=link"
}

const buttonClickTelegram = () => {
    window.location.href = "https://t.me/traderdosreisfree"
}
export default function ShopNow() {
    return (
        <div className="flex bg-zinc-800">
            <Header />
            <div className="flex items-center justify-center w-screen">
                <Carousel width="640px" height="840px" interval="10000" infiniteLoop="true" autoPlay="true">
                    <div class="flex p-6 font-mono bg-white">
                        <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-rose-400 before:rounded-lg">
                            <img src={imageLogo} alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                        </div>
                        <form class="flex-auto pl-6">
                            <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                                <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                    Trader dos Reis Script
                                </h1>
                                <div class="relative text-lg text-white">
                                    R$50.00
                                </div>
                            </div>
                            <div class="flex items-baseline my-6">
                                <div class="space-x-3 flex text-sm font-medium">
                                    <p className="bg-black rounded-sm text-white">Script desenvolvido para IQ Option</p>
                                    <p className="bg-black rounded-sm text-white">90% de assertividade</p>
                                </div>
                            </div>
                            <div class="flex space-x-2 mb-4 text-sm font-medium">
                                <div class="flex space-x-4">
                                    <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-rose-400 text-black" onClick={buttonClick} type="button">
                                        Comprar
                                    </button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs leading-6 text-slate-500">
                                Desenvolvido por profissionais.
                            </p>
                        </form>
                    </div>
                    <div class="flex p-6 font-mono bg-white">
                        <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-rose-400 before:rounded-lg">
                            <img src={imageLogo} alt="" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
                        </div>
                        <form class="flex-auto pl-6">
                            <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                                <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                                    Canal de sinais Telegram
                                </h1>
                                <div class="relative text-lg text-white">
                                    Grátis
                                </div>
                            </div>
                            <div class="flex items-baseline my-6">
                                <div class="space-x-3 flex text-sm font-medium">
                                    <p className="bg-black rounded-sm text-white">Fazemos o envio de sinais totalmente grátis</p>
                                    <p className="bg-black rounded-sm text-white">Sem nenhum dia de Loss</p>
                                </div>
                            </div>
                            <div class="flex space-x-2 mb-4 text-sm font-medium">
                                <div class="flex space-x-4">
                                    <button class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-rose-400 text-black" onClick={buttonClickTelegram} type="button">
                                        Entrar
                                    </button>
                                </div>
                                <button class="flex-none flex items-center justify-center w-12 h-12 text-black" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs leading-6 text-slate-500">
                                Desenvolvido por profissionais.
                            </p>
                        </form>
                    </div>
                </Carousel>
            </div >
        </div >
    )
}