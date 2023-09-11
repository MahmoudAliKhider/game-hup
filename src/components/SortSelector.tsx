import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {

    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={2}>
                Order By : Relevent
            </MenuButton>
            <MenuList>
                <MenuItem>Relevence</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector