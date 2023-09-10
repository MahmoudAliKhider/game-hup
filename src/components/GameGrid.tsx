import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from "../hooks/useGames";
import GameCard from './GameCard';
import GameCardSceleton from './GameCardSceleton';
import GameCardContontainer from './gameCardContontainer';



const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid paddingX={10} columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10}>
                {isLoading && skeleton.map(skeleton =>
                    <GameCardContontainer>
                        <GameCardSceleton key={skeleton} />
                    </GameCardContontainer>)}
                {games.map((game) => (
                    <GameCardContontainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContontainer>))}
            </SimpleGrid>
        </>
    );
};


export default GameGrid;
