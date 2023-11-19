import { useState } from "react";
import FileExplorer, { ItemProp } from "../components/FileExplorer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const API_URL="http://localhost:5000";

function Home(){
    
    const [ directory , setDirectory] =useState('');
    const [ file , setFile ] =useState<ItemProp>();

    return (
        <div>
            <Header/>
            <Nav directory={directory} setDirectory={setDirectory}/>
            <div className="row">
                <div className={file?"col-4":"col"}>
                    <FileExplorer directory={directory} setDirectory={setDirectory} setFile={setFile} />
                </div>
                { file &&
                <div className={file?"col-8":"d-none"} key={file?.path}>
                    <video controls autoPlay className="w-100">
                        <source   src={`${API_URL}/read/video?videoPath=${file?.path}`} type="video/mp4" />
                    </video>
                    <div className="fw-bold text-center">
                        {file.path}
                    </div>
                </div>
                }
            </div>
            <Footer/>
        </div>
    );
}
export default Home;