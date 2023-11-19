import { ItemProp } from "../FileExplorer";
import {FaFolder} from "react-icons/fa6";

interface Prop{
    directory:ItemProp,
    onClick:()=>void
}

function Directory({directory,onClick}:Prop){
    
    return (
        <div className="p-1" onClick={onClick} title={directory.path} data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="" >
            <FaFolder color="#f4b840" size={40} />
            &nbsp;
            <span >{directory.name}</span>
        </div>
    )
}
export default Directory;