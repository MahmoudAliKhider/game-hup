import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames, {  } from "../hooks/useGames";
import GameCard from './GameCard';
import GameCardSceleton from './GameCardSceleton';
import { GameQuery } from '../App';
import GameCardContontainer from './GameCardContontainer';

interface Props {
    gameQuery:GameQuery
}

const GameGrid = ({gameQuery}: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} paddingY={4} spacing={10}>
                {isLoading && skeleton.map(skeleton =>
                    <GameCardContontainer key={skeleton}>
                        <GameCardSceleton />
                    </GameCardContontainer>)}
                {data.map((game) => (
                    <GameCardContontainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContontainer>))}
            </SimpleGrid>
        </>
    );
};


export default GameGrid;
