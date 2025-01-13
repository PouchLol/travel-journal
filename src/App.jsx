import { Fragment } from "react"
import "./app.css"
import Header from "./components/Header"
import Entry from "./components/entry"
import data from "./components/data.js"
export default function App(){

    const dataEl=data.map((x)=>{
        return <Entry 
            key={x.id}
            {...x}
            />
    })
    return (
        
        <>
            <Header></Header>
            {dataEl}
            
        </>    
    )
}