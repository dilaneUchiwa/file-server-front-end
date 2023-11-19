import { FaArrowLeft } from "react-icons/fa6";

interface Prop{
    directory:string
    setDirectory:(elt:string)=>void
}

function Nav({directory,setDirectory}:Prop){

    const handleClick=()=>{
        setDirectory(directory.split('/').slice(0,-1).join('/'))
    }

    return (
        <div className="d-flex justify-content-between px-5 py-2">
            <div>
                <button className={directory===''?"d-none":"rounded-5"} onClick={handleClick} ><FaArrowLeft size={30}/></button>
            </div>
            <div className="fw-bold" >
                {directory}
            </div>
        </div>
    )
}
export default Nav;