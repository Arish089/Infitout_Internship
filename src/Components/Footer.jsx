import React from 'react'
import { Box, Flex, Image,Text } from '@chakra-ui/react'


const Footer = () => {
  return (
    <Box display='flex' bg='whitesmoke' h='200px' px={16} py={8} boxShadow='lg' mt={1} mb={{base:16,sm:'10',md:0}}>
      <Flex direction='column' justifyContent='space-between'>
        <Flex color='#9BABC6' alignItems='center'  gap={3} fontSize={12}>© Powered by
        <Image src='https://technicals.zerodha.com/static/media/logo-tm.3d4fcbe1.png' mt={1} w={14}/>
        </Flex>
        
        <Box>
        <Flex>
          <Image src='https://technicals.zerodha.com/static/media/zerodha_logo.3f3f94bf.svg' w={24}/>
        <zerodhaIcon />
        </Flex>
        <Flex>
        <Text color='#9BABC6' fontSize={12}>NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No: IN-DP-431-2019</Text>
        </Flex>
        </Box>
      </Flex>
      
    </Box>
  )
}

export default Footer