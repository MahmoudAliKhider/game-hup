import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/platformSelector'
import { PlatForm } from './hooks/useGames'


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatForm | null>(null);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area='nav' > <NavBar /> </GridItem>
    <Show above="lg">
      <GridItem area='aside' paddingX={5}>
        <GenreList onSelectedGerne={(gerne) => setSelectedGenre(gerne)} />
      </GridItem>
    </Show>
    <GridItem area='main'>
      <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
      <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
}

export default App
