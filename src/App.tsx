import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { PlatForm } from './hooks/useGames'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null;
  platform: PlatForm | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav' > <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} /> </GridItem>
    <Show above="lg">
      <GridItem area='aside' paddingX={5}>
        <GenreList onSelectedGerne={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <GameHeading  gameQuery={gameQuery} />
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
      <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
