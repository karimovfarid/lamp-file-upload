import React, {useState} from "react";

import icon from "../../assets/icon.svg";
import {EDragStatus} from "../../enum";

import './index.scss';


interface IProps {
    /** Image url. */
    url: string;

    /** On files selected handler. */
    onSelect?: (files: FileList) => void;
}

/** File select component. */
const FileSelect: React.FunctionComponent<IProps> = ({url, onSelect = (files: FileList) => console.log(files)}) => {
    const [dragStatus, setDragStatus] = useState(EDragStatus.IDLE);

    /** on drop image handler. */
    const onDropImgHandler = (event: React.DragEvent<any>) => {
        event.preventDefault();
        let imageFile = event.dataTransfer.files;
        setDragStatus(EDragStatus.IDLE);
        onSelect(imageFile)
    };

    /** On drop image handler. */
    const onDragOverImgHandler = (event: React.DragEvent<any>) => {
        event.preventDefault();
        setDragStatus(EDragStatus.OVER)
    };

    /** On drop image handler. */
    const onDragLeaveHandler = (event: React.DragEvent<any>) => {
        event.preventDefault();
        setDragStatus(EDragStatus.IDLE)
    };

    /** Drag text after successfully uploaded file. This part temporary while BE will be ready. */
    const renderDragText = () => {
        let result;
        if (url) {
            result = (
                <>
                    <div className="file-select__drag">Drag & drop here to replace</div>
                    <div className="file-select__or">-or-</div>
                    <div className="file-select__upload">Select file to replace</div>
                </>
            )
        } else {
            result = (
                <>
                    <div className="file-select__drag">Drag & drop here</div>
                    <div className="file-select__or">-or-</div>
                    <div className="file-select__upload">Select file to upload</div>
                </>
            )
        }
        return result;
    };

    return (
        <div className={`file-select ${dragStatus === EDragStatus.IDLE ? '' : 'file-select__over-bg'}`}
             onDragOver={onDragOverImgHandler}
             onDrop={onDropImgHandler}
             onDragLeave={onDragLeaveHandler}

        >
            <div>
                <div className='file-select__progress'>
                    <img src={url ? url : icon}/>
                </div>
                <div className="text-center">
                    <label htmlFor="file-input">
                        {renderDragText()}
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        multiple={false}
                        onChange={(e: any) => onSelect(e.target.files)}
                        onClick={e => {
                            (e.target as HTMLInputElement).value = '';
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

FileSelect.displayName = 'FileSelect';

export {FileSelect};
