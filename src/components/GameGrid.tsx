import { useEffect, useState } from "react";
import { Text } from '@chakra-ui/react'
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface fetchGamRes {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState("");

    useEffect(() => {
        apiClient.get<fetchGamRes>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setErrors(err.message))
    });
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(games => <li key={games.id}>{games.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;
