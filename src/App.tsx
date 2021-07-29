import React, {useState} from 'react';

import {FileCard} from "./components/FileCard";
import {FileSelect} from "./components/FileSelect";

import './App.scss';


interface IProps {}

/** App component. */
const App: React.FunctionComponent<IProps> = () => {
    const [imgUrl, setImgUrl] = useState('');

    return (
        <div className='panel'>
            <FileCard>
                <FileSelect
                    url={imgUrl}
                    onSelect={(fileList: FileList) => {
                        for (let i = 0; i < fileList.length; i++) {
                            const selectedFile = fileList.item(i);
                            setImgUrl(URL.createObjectURL(selectedFile))
                        }
                    }}/>
            </FileCard>
        </div>
    );
}

export default App;
