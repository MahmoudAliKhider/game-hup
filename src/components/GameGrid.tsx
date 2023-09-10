import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, { Game } from "../hooks/useGames";
import GameCard from './GameCard';
import GameCardSceleton from './GameCardSceleton';
import GameCardContontainer from './gameCardContontainer';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres';

interface Props{
    selectedGenre:Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
    const { data, error, isLoading } = useGames(selectedGenre);
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid paddingX={10} columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} spacing={10}>
                {isLoading && skeleton.map(skeleton =>
                    <GameCardContontainer key={skeleton}>
                        <GameCardSceleton />
                    </GameCardContontainer>)}
                {data.map((game) => (
                    <GameCardContontainer key={game.id}>
                        <GameCard  game={game} />
                    </GameCardContontainer>))}
            </SimpleGrid>
        </>
    );
};


export default GameGrid;
