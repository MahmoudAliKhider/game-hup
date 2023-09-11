import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
    return (
        <InputGroup>
        <InputLeftElement paddingY={6} children={<BsSearch />} />
        <Input borderRadius={20} paddingY={6} placeholder='Search Game ....' variant='filled'></Input>
        </InputGroup>
    )
}

export default SearchInput