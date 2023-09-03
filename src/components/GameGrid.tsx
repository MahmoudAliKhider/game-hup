import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from './GameCard';
import GameCardSceleton from './GameCardSceleton';



const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeleton = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                {isLoading && skeleton.map(skeleton => <GameCardSceleton key={skeleton} />)}
                {games.map((game) => (<GameCard key={game.id} game={game} />))}
            </SimpleGrid>
        </>
    );
};


export default GameGrid;