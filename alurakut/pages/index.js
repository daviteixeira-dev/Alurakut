import MainGrid from '../components/MainGrid'
import Box from '../components/Box'

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src="https://github.com/daviteixeira-btm.png"/>
        </Box>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo
        </Box>
      </div>
      
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da Comunidade
        </Box>

        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
