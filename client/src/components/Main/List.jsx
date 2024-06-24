import { useContext } from "react";
import { Context } from "../../App";

const List = () => {

    const { items } = useContext(Context)

    return (
        <table className="w-[95vw] mx-auto mb-5">
            <thead>
                <tr className="bg-gray-300">
                    <th>Name</th>
                    <th>Serving Size</th>
                    <th>Weight</th>
                    <th>Calories (kcal)</th>
                    <th>Reference</th>
                </tr>
            </thead>
            <tbody className="bg-gray-100">
                {items && items.length > 0 ?
                    items.map((item, i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.serving_size}</td>
                            <td>{item.weight}</td>
                            <td>{item.calories}</td>
                            <td>{item.reference}</td>
                        </tr>
                    )
                    : ""}
            </tbody>
        </table>
    )
}; export default List