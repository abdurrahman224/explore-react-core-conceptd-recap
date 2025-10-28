import { useEffect, useState } from "react";
import Posts  from './Posts'

export default function Post (){

const [Postc , setPostc] = useState([])

useEffect (()=>{
 fetch('https://jsonplaceholder.typicode.com/posts')

.then (rex => rex.json())
.then (data => setPostc(data))
console.log(Postc);


},[])

return (

    <div className="c">
    <hr/>
    <h2> Post : {Postc.length}</h2>

    {

        Postc.map(singlePost =><Posts key={singlePost.id} sing={singlePost} />)
    }
    
    
    </div>
)


}