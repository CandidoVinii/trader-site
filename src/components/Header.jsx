import { Link } from "react-router-dom";

export default function Header() {
    const list = ['Home', 'Shop', 'About', 'FAQ', 'Contact'];
    return (
        <div className="bg-zinc-800 flex w-40 h-screen flex-col justify-center border-r">
            {
                list.map((item, index) => (
                    <Link className="" exact to={`/${item.split(' ')[0]}`}>
                        <div className="flex justify-center mt-4 p-2" key={index}>
                            <h2 className="text-white font-bold">{`/ ${item}`}</h2>
                        </div>
                            <hr className="bg-white"/>
                    </Link>
                ))
            }
        </div>
    )
}