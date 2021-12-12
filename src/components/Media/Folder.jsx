import React from 'react'
import FolderIcon from '@mui/icons-material/Folder';
function Folder(props) {
    return (
    <div className="item folder">
        <FolderIcon className="item-Icon"/> 
        <span className="item-Name">{props.name}</span>
    </div>
    )
}

export default Folder
