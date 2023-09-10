import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatForms'
import { PlatForm } from '../hooks/useGames'

interface Props{
    onSelectedPlatform : (platform:PlatForm) => void;
    selectedPlatform : PlatForm|null;
}
const platformSelector = ({onSelectedPlatform , selectedPlatform}:Props) => {

    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || 'PlatForms'}
                </MenuButton>
            <MenuList>
                {data.map((platfom) => <MenuItem onClick={()=>onSelectedPlatform(platfom)} key={platfom.id}>{platfom.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default platformSelector