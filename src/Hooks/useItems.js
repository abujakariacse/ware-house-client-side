import { useEffect, useState } from "react"

const useItems = () => {

    const [Items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://ancient-oasis-24969.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [Items, setItems];
}

export default useItems;