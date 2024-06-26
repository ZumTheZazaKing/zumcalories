import { useContext } from "react";
import { Context } from "../../App";
import { IoClose } from "react-icons/io5";

const Searchbar = () => {

    const { searchQuery, setSearchQuery } = useContext(Context)

    const clearSearch = () => {
        setSearchQuery("")
    }

    return (
        <div className="w-[90vw] sm:w-[70vw] mx-auto flex items-center bg-white px-4 p-2 rounded-[50px] shadow-lg">
            <input
                className="flex-[1] outline-none"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search food... (etc. Chicken, Fish)"
            />
            {searchQuery.trim() !== "" &&
                <button onClick={clearSearch}>
                    <IoClose className="text-2xl" />
                </button>
            }
        </div>
    )
}; export default Searchbar