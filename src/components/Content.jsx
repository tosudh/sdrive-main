import React from 'react'

import Folder from './Media/Folder';
import File from './Media/File';
import Image from './Media/Image';
import Details from './Details';

function Content() {
    return (
        <>
        <div id="content-container">
            <Folder name="Goa Trip"></Folder>
            <Folder name="Ladakh Trip"></Folder>
            <Folder name="Assam Trip"></Folder>
            <Folder name="US Trip"></Folder>
        </div>
        <Details/>
        
        </>
    )
}

export default Content
