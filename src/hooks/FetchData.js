import axios from "axios";
import { useEffect, useState } from "react";

export function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://api.github.com/users/web-Matheus")
        .then(response => {
            setData(response.data)
        })
    },[]);

    return {data}
}
