import React, { useState } from "react";
import styled from 'styled-components';

export default function Dropdown(){
    const textOptions = [
        "All",
        "The A",
        "The B",
        "The C",
        "This A",
        "This B",
        "This C"
    ];

    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState('대상 선택');

    return (
        <DropdownWrapper>
            <DropdownBox
                onClick={() => setIsOpen(!isOpen)}
            >
                {item}
                <Arrow>▼</Arrow>
            </DropdownBox>

            {isOpen &&  
                <SelectWrapper>
                    <SelectInput
                        type="text"
                        placeholder="검색하기"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                    
                    {searchItem && textOptions.filter((data) => {
                        if (searchItem === '') {
                            return data;
                        } else if (data.toLowerCase().includes(searchItem.toLowerCase())) {
                            return data;
                        }
                        return null;
                    }).map(data => (
                        <SelectOptions 
                            key={data}
                            onClick={() => { setItem(data); setIsOpen(false); setSearchItem(''); }}
                        >
                            {data}
                        </SelectOptions>
                    ))}
                </SelectWrapper>
            }
        </DropdownWrapper>
    );
}

const DropdownWrapper = styled.div`
    width: 176px;
`;

const DropdownBox = styled.div`
    width: 176px;
    height: 33px;
    flex-shrink: 0;
    border: 0.5px solid #9DA1AD;
    border-radius: 5px;
    background: rgba(217, 217, 217, 0.00);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const Arrow = styled.div`
    margin-left: auto;
    padding-right: 10px;
`;

const SelectWrapper = styled.div`
    width: 176px;
    border: 0.5px solid #9DA1AD;
    border-radius: 5px;
    background: white;
    box-sizing: border-box;
    margin-top: 5px;
`;

const SelectInput = styled.input`
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    border-bottom: 0.5px solid #9DA1AD;
    outline: none;
    border-radius: 5px 5px 0 0;
`;

const SelectOptions = styled.div`
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
