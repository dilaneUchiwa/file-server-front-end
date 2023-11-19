import { FaFile, FaFileExcel, FaFileImage, FaFilePdf, FaFileWord, FaFileZipper, FaMusic } from "react-icons/fa6";
import { MdMovie} from "react-icons/md";
import {BiSolidFileTxt} from "react-icons/bi";
import { ItemProp } from "../FileExplorer";

interface Prop{
    file:ItemProp,
    onClick:()=>void
}


function File({file,onClick}:Prop){
    const size=50;
    const icons: { [key: string]: JSX.Element } = {
        '.mp3': <FaMusic size={size}/>,
        '.mp4': <MdMovie size={size}/>,
        '.avi': <MdMovie size={size}/>,
        '.mpeg': <MdMovie size={size}/>,
        '.flv': <MdMovie size={size}/>,
        '.zip': <FaFileZipper size={size}/>,
        '.rar': <FaFileZipper size={size}/>,
        '.tar': <FaFileZipper size={size}/>,
        '.png': <FaFileImage size={size}/>,
        '.gif': <FaFileImage size={size}/>,
        '.jpg': <FaFileImage size={size}/>,
        '.jpeg': <FaFileImage size={size}/>,
        '.pdf': <FaFilePdf  size={size}/>,
        '.txt': <BiSolidFileTxt size={size}/>,
        '.xls': <FaFileExcel size={size}/>,
        '.doc': <FaFileWord size={size}/>,
        '.docx': <FaFileWord size={size}/>,
        'default': <FaFile size={size}/>,
      };

    return (
        <div className="p-1" onClick={onClick} title={file.path} data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="" >
            {icons[file.extension] || icons['default']}
            &nbsp;
            <span className="text-truncate" >{file.name}</span>
        </div>
    )
}
export default File;