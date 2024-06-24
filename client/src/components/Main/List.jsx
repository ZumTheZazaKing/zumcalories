import { useContext } from "react";
import { Context } from "../../App";

const List = () => {

    const { items } = useContext(Context)

    const indexes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

    return (
        <div className="w-[90vw] sm:w-[70vw] mx-auto text-center space-y-5">
            <div className="sticky top-0 sm:flex sm:flex-wrap space-x-1 justify-center bg-slate-800 text-white max-w-full overflow-auto">
                {indexes.map((index, i) => {
                    return (
                        <a
                            key={i}
                            href={`#${index}`}
                            className="p-2"
                        >
                            {index}
                        </a>
                    )
                })}
            </div>
            {items && items.length > 0 ?
                indexes.map((index, i) => {
                    return (
                        <div id={index} key={i} className="space-y-3 pt-[50px]">
                            <h1 className="bg-gray-400 text-white font-bold text-2xl px-4 py-2">
                                {index}
                            </h1>
                            {items.map((item, i) =>
                                item.name.charAt(0).toUpperCase() === index ? <div key={i}>{item.name}</div> : ""
                            )}
                        </div>
                    )
                })
                : ""}
        </div>
    )
}; export default List