import React,{useState} from 'react';


const Count = () => {

    
    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(count + 1);
    }

    const handleDecreament = () => {
        setCount(count - 1);
    }
    

    return (

        <div>
            <div>Count :{count}
            <button onClick={handleIncreament}>Add</button>
            <button onClick={handleDecreament}>Delete</button>
            </div>
        </div>
    )

    

}

export default Count;