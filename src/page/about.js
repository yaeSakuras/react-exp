import React,{useState,memo,useMemo,useCallback} from 'react';

function SubCounter({onClick,data}){
    console.log('SubCounter render');
    return (
        <button onClick={onClick}>{data}</button>
    )
}

const SubCount = memo(SubCounter);

function About() {
    console.log('Counter render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);
    const [count, setCount] = useState(1);
    const data = useMemo(()=>(number),[number]);

    const addClick = useCallback(()=>{
        setNumber(number+1);
    },[number]);

    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return (
        <div>
            <h4>{name}-{expensive}</h4>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCount data={data} onClick={addClick}/>
        </div>
    );
}
// const set = new Set();
//
// function Child({ callback,data }) {
//     console.log("child");
//     return (
//         <div>ch: { callback() } {data}</div>
//     )
// }
//
// function About() {
//     const [count, setCount] = useState(1);
//     const [val, setVal] = useState('');
//     const data = useMemo(()=>(count),[count]);
//     const callback = useCallback(() => {
//         return count;
//     }, [count]);
//     set.add(callback);
//     return (
//         <div>
//             <Child data={data} callback={callback}/>
//             <h4>{count}</h4>
//             <h4>{set.size}</h4>
//             <div>
//                 <button onClick={() => setCount(count + 1)}>+</button>
//                 <input value={val} onChange={event => setVal(event.target.value)}/>
//             </div>
//         </div>
//     )
// }

export default About;