import React, { useState } from 'react';
import styled from 'styled-components';

export default function Dropdown({ options = [], placeholder, onSelect }) {
    const [searchItem, setSearchItem] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(placeholder);

    console.log('Dropdown options:', options); // Debugging

    return (
        <DropdownWrapper>
            <DropdownBox onClick={() => setIsOpen(!isOpen)}>
                {selectedItem}
                <Arrow>▼</Arrow>
            </DropdownBox>

            {isOpen && (
                <SelectWrapper>
                    <SelectInput
                        type="text"
                        placeholder="검색하기"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                    {options
                        .filter((option) => {
                            if (searchItem === '') return option;
                            return option.toLowerCase().includes(searchItem.toLowerCase());
                        })
                        .map((option) => (
                            <SelectOptions
                                key={option}
                                onClick={() => {
                                    setSelectedItem(option);
                                    setIsOpen(false);
                                    setSearchItem('');
                                    onSelect(option);
                                }}
                            >
                                {option}
                            </SelectOptions>
                        ))}
                </SelectWrapper>
            )}
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
    padding: 4px 9px 5px 14px;
`;

const Arrow = styled.div`
    margin-left: auto;
    padding-right: 10px;
`;

const SelectWrapper = styled.div`
    width: 190px;
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
