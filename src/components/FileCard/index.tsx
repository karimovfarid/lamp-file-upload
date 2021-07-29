import React from "react";

import './index.scss';


interface IProps {}

/** FileCard component. */
const FileCard: React.FunctionComponent<IProps> = ({children}) => {
    return (
        <div className='file-card'>
            <div className='file-card-header'>
                <div className='file-card-header__title'>
                    Company Logo
                </div>
                <div className='file-card-header__helper'>
                    Logo should be square, 100px size and in png, jpeg file format.
                </div>
            </div>
            <div className='divider'/>
            <div className='file-card-body'>
                {children}
            </div>
        </div>
    )
};

FileCard.displayName = 'FileCard';

export {FileCard};
