const FoodItem = (props) => {

    const { data } = props

    return (
        <div className="space-y-4">
            <h1 className="font-bold text-2xl">{data.name}</h1>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 justify-center">
                <div className="flex-col gap-2">
                    <h1 className="font-bold">Serving Size</h1>
                    <p>{data.serving_size}</p>
                </div>
                <div className="flex-col gap-2">
                    <h1 className="font-bold">Weight</h1>
                    <p>{data.weight}</p>
                </div>
                <div className="flex-col gap-2">
                    <h1 className="font-bold">Calories (kcal)</h1>
                    <p>{data.calories}</p>
                </div>
                <div className="flex-col gap-2">
                    <h1 className="font-bold">Reference</h1>
                    <p>{data.reference}</p>
                </div>
            </div>
        </div>
    )
}; export default FoodItem