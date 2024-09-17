
import { useState } from "react"
function List(){
    const [marks,setMarks]=useState([23,34,45,67,78,123,231])
    return(
        
        <div>
            {
                marks.map((i)=>{
                    return <p key={i}>{i}</p>
                })
            }
            <p>Hello</p>
        </div>
    )
}
export default List