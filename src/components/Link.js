import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
color: red;
`;

const Link = ({url,title}) => {
    return (
        <InnerLink href={url} target='_blank' rel='noopener noreferrer'>
        {title}
        </InnerLink>
    );
};


export default Link;