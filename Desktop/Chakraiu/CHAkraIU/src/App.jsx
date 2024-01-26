import Header from './components/Header'
import { Box,Center,SimpleGrid } from '@chakra-ui/react'
function App() {
  

  return (
    <>
    <Header></Header>
    <Box
      w="500px"  // Ajusta el tamaño según tus necesidades
      h="235px"  // Ajusta el tamaño según tus necesidades
      backgroundImage="url('https://media.tacdn.com/media/attractions-splice-spp-674x446/06/cf/ee/7d.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      boxShadow="md"
      position="absolute"
      margin='100px'
      marginLeft='20px'
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius='10px'
    >
      <Center color='white'>
        <Box>
          Contenido de la SmallHeader
        </Box>
      </Center>
      <Box mt={4}>
        <Box
          as='button'
          borderRadius='md'
          bg='rgba(255, 99, 71, 0.3)'
          color='white'
          px={4}
          h={8}
          _hover={{ bg: '#b8bdc1', color:'#000' }}
        >
          Ver Detalles
        </Box>
        <Box
          as='button'
          borderRadius='md'
          bg='rgba(255, 99, 71, 0.3)'
          color='white'
          px={4}
          h={8}
          _hover={{ bg: '#b8bdc1', color:'#000' }}
          mt={2}
        >
          Ver Video
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default App
