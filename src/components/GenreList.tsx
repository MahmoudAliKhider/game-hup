import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImagUrl from '../services/images-url';

interface Props {
    onSelectedGerne: (genre: Genre) => void
}
const GenreList = ({onSelectedGerne}:Props) => {
    const { data, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map(gener =>
                <ListItem key={gener.id} paddingY='6px'>
                    <HStack>
                        <Image boxSize='47px' borderRadius={8} src={getCroppedImagUrl(gener.image_background)} />
                        <Button onClick={() => onSelectedGerne(gener)} fontSize='xl' variant='link'>{gener.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList