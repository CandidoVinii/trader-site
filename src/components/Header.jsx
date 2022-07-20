import { Link } from "react-router-dom";

export default function Header() {
    const list = ['Home', 'Shop', 'About', 'Contact'];
    return (
        <div className="bg-zinc-800 flex w-40 h-screen flex-col justify-center border-r">
            {
                list.map((item, index) => (
                    <Link exact to={`/${item.split(' ')[0]}`}>
                        {/* <div className="flex justify-center mt-4 p-2 border-b" key={index}> */}
                            <button class="w-full h-full p-4 border rounded-sm transition ease-in-out delay-150 bg-rose-500 hover:-translate-y-1 hover:scale-110 hover:bg-rose-500 duration-300">
                                {`/${item}`}
                            </button>
                        {/* </div> */}
                        {/* <hr className="bg--300" /> */}
                    </Link>
                ))
            }
        </div>
    )
}