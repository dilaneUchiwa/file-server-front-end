import { useEffect, useState } from "react";
import axios from "../api/axios";
import Directory from "./Card/Directory";
import File from "./Card/File";
import '../styles/fileExplorer.css';

const API_URL='discovery';

export interface ItemProp{
    name:string
    size:number
    type:string 
    path:string
    createdAt:string 
    modfiedAt:string 
    extension:string
    count:number
}

interface Prop{
    directory:string
    setDirectory:(elt:string)=>void
    setFile:(elt:ItemProp)=>void
}

function FileExplorer({directory,setDirectory,setFile}:Prop){
    const [ element , setElement ] =useState([]);
    

    useEffect(()=>{
     
            axios.post(API_URL,{directory:directory})
            .then(response=>{
                setElement(response.data)
            })
            .catch(error=>console.log(error));
        
    },[directory]);

    return (
        <div className="px-5">
            <div className="row row-cols-2 row-cols-md-4 r0w-cols-lg-6">
            {
                element.map((elt:ItemProp)=>{
                   return <div className="element" key={elt.path} >
                        {elt.type==='file'? <File  file={elt} onClick={()=>setFile(elt)} /> : <Directory directory={elt} onClick={()=>setDirectory(elt.path)} />}
                   </div>
                })
            }
            </div>
        </div>
    );
}
export default FileExplorer;