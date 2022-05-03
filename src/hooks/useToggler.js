import { useState } from "react";

const useToggler = (value = true) => {
    const [toggle, setToggle] = useState(value);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return [toggle, handleToggle]

}

export default useToggler;