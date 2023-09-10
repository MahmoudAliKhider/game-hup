import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatForms'

const platformSelector = () => {

    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>platForms</MenuButton>
            <MenuList>
                {data.map((platfom) => <MenuItem key={platfom.id}>{platfom.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default platformSelector