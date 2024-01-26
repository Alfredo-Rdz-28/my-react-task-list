import { Box,Center,SimpleGrid } from '@chakra-ui/react'


const Header =() =>{
    return(
        <Box display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop='30px'>
           
        <Box
        w="1000px"
        h="350px"
        backgroundImage="url('https://media.tacdn.com/media/attractions-splice-spp-674x446/06/cf/ee/7d.jpg')"  
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="md"
        boxShadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center" color='white'>
          <Center>
            Domina el Terreno
          </Center>
        </Box>
        <Box mt={4} textAlign="center">
          <Box as='button' borderRadius='md' bg='#84bfc3' color='white' marginRight='10px' px={4} h={8} mb={2} _hover={{ bg: '#898b75', color:'#000' }}>
            Ver Detalles
          </Box>
          <Box as='button' borderRadius='md' bg='#84bfc3' color='white' px={4} h={8} _hover={{ bg: '#898b75', color:'#000' }}>
            Ver Video
          </Box>
        </Box>
      </Box>
      </Box>
    )
    
}

export default Header;
