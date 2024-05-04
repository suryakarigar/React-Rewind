import { useEffect, useState } from "react";



function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => response.json())
        .then((response) => setData(response.rates || {}))
        .catch((error) => console.error('Error fetching currency info:', error));
        console.table(data);
    }, [currency])
    console.table(data);
    return data;
}

export default useCurrencyInfo;