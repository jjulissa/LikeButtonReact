import { useState } from "react"; 


export default function LikeButton() {

    const color = ['purple','blue','green','yellow','orange','red']; 
    
    const [counter, setCounter] = useState(0); 
    const suma = () => setCounter( sum => sum += 1 ); 

    const aleatorio = color[Math.floor(Math.random() * color.length)] 
    
    function llamar() { 
       console.log(aleatorio);
        suma()
    }

   

    return ( 
            <div> 
                <button style={{background: aleatorio}} className="btn" onClick={llamar}> 
                    <span>{counter}</span> Likes 
                </button> 
            </div>
    )
}