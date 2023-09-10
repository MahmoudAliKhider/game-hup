import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres'
import getCroppedImagUrl from '../services/images-url';

const GenreList = () => {
    const { data } = useGenres();
    return (
        <List>
            {data.map(gener => 
            <ListItem key={gener.id} paddingY='6px'>
                <HStack>
                    <Image boxSize='47px' borderRadius={8} src={getCroppedImagUrl(gener.image_background)} />
                    <Text fontSize='xl'>{gener.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList