import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';
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
        <>
        <Heading fontSize='3xl' marginBottom={3}>Genres</Heading>
        <List>
            {data.map(gener =>
                <ListItem key={gener.id} paddingY='6px'>
                    <HStack>
                        <Image boxSize='47px' borderRadius={8} objectFit='cover' src={getCroppedImagUrl(gener.image_background)} />
                        <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectedGerne(gener)} fontSize='xl' variant='link'>{gener.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
        </>
    )
}

export default GenreList