import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex bg-zinc-800">
      <Header />
      {/* <div className="flex justify-center items-center w-full">
        <div className="flex items-start justify-center w-full">
          <div className="bg-zinc-400 rounded-lg w-96 h-44 flex items-center justify-center">
            <h2 className="text-white text-2xl font-serif font-bold">Seja bem-vindo ao <h1 className="text-rose-600 text-4xl font-serif font-extrabold">Trader dos Reis</h1></h2>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center w-full animate-wiggle">
        <div class="border border-rose-300 shadow rounded-md p-4 max-w-sm h-max w-full mx-auto">
          <div class="animate-pulse flex items-center justify-center space-x-4">
              <h2 className="text-white text-2xl font-serif font-bold">Seja bem-vindo ao <h1 className="text-rose-600 text-4xl font-serif font-extrabold">Trader dos Reis</h1></h2>
              <div class="space-y-3">
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}