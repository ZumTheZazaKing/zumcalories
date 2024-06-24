import { useContext } from "react";
import { Context } from "../../App";

const Searchbar = () => {

    const { searchQuery, setSearchQuery } = useContext(Context)

    return (
        <div className=" w-[90vw] sm:w-[70vw] mx-auto">
            <input
                className="w-full px-4 p-2 rounded-[50px] shadow-lg"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search food... (etc. Chicken, Fish)"
            />
        </div>
    )
}; export default Searchbar