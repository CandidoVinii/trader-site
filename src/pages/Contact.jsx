import Header from "../components/Header";

export default function Contact() {
    return (
        <div className="flex h-screen bg-zinc-800">
            <Header />
            <div className="w-full">
                <div className="container mx-auto my-20 w-1/3 border bg-zinc-200">
                    <div className="p-5 space-y-5 shadow-xl">
                        <h4 className="text-center text-3xl">Contato</h4>
                        <form>
                            <div className="grid grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-rose-500"
                                    placeholder="Nome"
                                />
                                <input
                                    type="text"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-rose-500"
                                    placeholder="Sobrenome"
                                />
                                <input
                                    type="email"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-rose-500 col-span-2"
                                    placeholder="Email"
                                />
                                <input
                                    type="tel"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-rose-500 col-span-2"
                                    placeholder="Telefone"
                                />
                                <textarea
                                    cols="10"
                                    rows="5"
                                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-rose-500 col-span-2"
                                    placeholder="Digite aqui..."
                                ></textarea>
                            </div>
                            <input
                                type="submit"
                                value="Mensagem"
                                className="focus:outline-none mt-5 bg-rose-500 px-4 py-2 text-white font-bold w-full"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}