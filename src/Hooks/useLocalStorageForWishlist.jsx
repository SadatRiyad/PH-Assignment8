import { useEffect, useState } from "react";
import { getFromLocalStorage1 } from "../utils/localStorage";

const useLocalStorage1 = () => {
    const [localData1, setLocalData1] = useState([]);
    // console.log(localData);

    useEffect(() => {
        setLocalData1(getFromLocalStorage1());
    }, [])

    return { localData1 };
};

export default useLocalStorage1;