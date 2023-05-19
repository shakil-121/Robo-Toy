import { useEffect } from "react"

const usetitle = title => {
    useEffect(()=>{
      document.title=`${title} | Robo Toy`
    },[title])
};

export default usetitle;