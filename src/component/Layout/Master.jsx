import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Master = (props) => {
    const {children} = props;
    return (
        <div className="flex flex-row sm:gap-1">
            <Sidebar/>
            <Content>{children}</Content>
        </div>
    )
}

export default Master;