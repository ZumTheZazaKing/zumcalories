import { useContext } from "react";
import { Context, ReactSwal } from "../../App";

import FoodItem from "./List/FoodItem";

const List = () => {

    const { items, searchQuery } = useContext(Context)

    const indexes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")

    const checkFoodItem = (data) => {
        ReactSwal.fire({
            showConfirmButton: false,
            html: <FoodItem data={data} />
        })
    }

    return (
        <div className="w-[90vw] sm:w-[70vw] mx-auto text-center space-y-5">
            {searchQuery.trim() === "" ?
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
                : ""}
            {items && items.length > 0 ?
                indexes.map((index, i) => {
                    return (
                        <div id={index} key={i} className={`space-y-3 ${searchQuery.trim() === "" ? "pt-[50px]" : ""}`}>
                            {searchQuery.trim() === "" ?
                                <h1 className="bg-gray-400 text-white font-bold text-2xl px-4 py-2">
                                    {index}
                                </h1>
                                : ""}
                            {items.map((item, i) =>
                                item.name.charAt(0).toUpperCase() === index ?
                                    <div
                                        onClick={() => checkFoodItem(item)}
                                        className={`${item.name.toLowerCase().includes(searchQuery.trim("").toLowerCase()) ? "" : "hidden"} cursor-pointer hover:underline transition-all`}
                                        key={i}>
                                        {item.name}
                                    </div>
                                    : ""
                            )}
                        </div>
                    )
                })
                : ""}
        </div>
    )
}; export default List