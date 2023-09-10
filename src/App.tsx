import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/platformSelector'


function App() {
  const [selectegGenre, setSelectedGenre] = useState<Genre | null>(null)
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
      <PlatformSelector />
      <GameGrid selectedGenre={selectegGenre} />
    </GridItem>
  </Grid>
}

export default App
