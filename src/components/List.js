import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
padding:10px;`
const Label = styled.span`
font-weight: bold`


const List = ({ items,title }) => {
    return (
        <>
            <Title>{title}</Title>
            <ul >
                {items.map(item =>(
                    <li key={item.label}>
                        <Label>{item.label}</Label>
                    {item.value}
                    </li>
                ))}
            </ul>
        </>
    );
};


export default List;