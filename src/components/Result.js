import City from "./City"

const Result = ({ city1, city2 }) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <h2>Picked city 1</h2>
                    {city1 ? <City city={city1} /> : <p>No city picked yet</p>}
                </div>
                <div style={{ width: "100%" }}>
                    <h2>Picked city 2</h2>
                    {city2 ? <City city={city2} /> : <p>No city picked yet</p>}
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <h2>Difference in population</h2>
                {city1 && city2 && Math.abs(city1.population - city2.population)}
            </div>
        </div>
    )
}

export default Result
