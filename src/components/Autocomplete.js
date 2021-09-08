import { useState, useEffect } from 'react'

const Autocomplete = ({ onCityClick, setter }) => {

    const [cities, setCities] = useState(null)

    const onChange = (e) => {
        const stuff = fetch("https://api.teleport.org/api/cities/?search=" + e.target.value + "&limit=5")
            .then(res => res.json())
            .then(res => res._embedded["city:search-results"])
            .then(res => setCities(res))
    }

    return (
        <div style={{ width: "100%" }}>
            <h2>Type to search a city </h2>
            <input type='text' onChange={onChange} />
            <div style={{ display: "flex", flexDirection:"column" }}>
                {cities && cities.map((item) => {
                    return <button key={item.matching_full_name} onClick={
                        () => onCityClick(item._links["city:item"].href, setter)}>{item.matching_full_name}
                    </button>
                })}
            </div>
        </div>
    )
}

export default Autocomplete
