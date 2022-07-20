import Header from "../components/Header";

export default function About() {
	return (
		<div className="flex bg-zinc-800">
			<Header />
			<div className="flex items-center justify-center w-screen">
				<div className="border-rose-300 border  w-[800px] rounded-lg">
					<span class="flex-row h-2 w-2">
						<span class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-rose-700 opacity-75"></span>
						<span class="relative inline-flex ml-[6px] rounded-full h-3 w-3 bg-rose-500"></span>
					</span>
					<p className="text-white font-bold font-serif text-xl">
						Ao iniciar uma jornada de Trade, pode ser um processo solitário e frustrante. Aqui no Trader dos Reis, nossos produtos permitem que os traders comecem com as ferramentas que muitos traders levam meses ou anos para desenvolver e entender completamente. Oferecemos uma ampla variedade de ferramentas e estamos sempre adicionando à nossa lista de produtos para garantir que nossos clientes tenham as ferramentas necessárias para dar-lhes uma vantagem nos mercados financeiros
					</p>
				</div>
			</div>
		</div>
	)
}