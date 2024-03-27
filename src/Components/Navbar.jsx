import { Button, Divider, Flex, Image, Box, Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import { ChevronLeftIcon,ArrowUpIcon } from '@chakra-ui/icons'
import {FaRupeeSign} from 'react-icons/fa'
import '.././App.css'



const Navbar = () => {
    const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Box position="fixed" w="100%" zIndex="2" top="0" bg="white">
    <Flex direction='column'>
        <Flex px={7} alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center' gap={2}>
                <Image src='https://technicals.zerodha.com/static/media/zerodha_logo.3f3f94bf.svg' boxSize={24}/>
                <Divider orientation='vertical' height={10}/>
                <Image src='https://technicals.zerodha.com/static/media/poweredByStreak.9b530bec.png' boxSize={12}/>
            </Flex>
            <Box display={{base:'none',md:'flex'}} alignItems='center' gap={8}>
                <Text>Home</Text>
                <Button colorScheme='blue'>Sign Up</Button>
            </Box>
        </Flex>
        <Box bg='gray.50' >
            <Box display={{base:'none',md:'flex'}} w='40%' m='auto' mt={4} p={1} cursor='pointer' rounded='md' bg='#FFFFFF' color='#9BABC6' justifyContent='space-around'>
            <Text 
                 onClick={() => handleTabClick('5 min')}
                 bg={activeTab === '5 min' ? 'blue.400' : 'transparent'}
                 color={activeTab === '5 min' ? 'white' : '#9BABC6'}
                 px={2}
                 py={1}
                 rounded='md'>
                    5 min</Text>
                <Text  onClick={() => handleTabClick('10 min')}
            bg={activeTab === '10 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '10 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                10 min</Text>
                <Text  onClick={() => handleTabClick('15 min')}
            bg={activeTab === '15 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '15 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                15 min</Text>
                <Text  onClick={() => handleTabClick('30 min')}
            bg={activeTab === '30 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '30 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                30 min</Text>
                <Text  onClick={() => handleTabClick('hour')}
            bg={activeTab === 'hour' ? 'blue.400' : 'transparent'}
            color={activeTab === 'hour' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                hour</Text>
                <Text  onClick={() => handleTabClick('1 Day')}
            bg={activeTab === '1 Day' ? 'blue.400' : 'transparent'}
            color={activeTab === '1 Day' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>1 Day</Text>
            </Box>
            <Flex alignItems='center' fontWeight='semibold' fontSize='x-large' gap={2}>
                <ChevronLeftIcon boxSize={10}/>
               <Image src='https://technicals.zerodha.com/static/media/NSE.62a33981.svg' boxSize={6}/> NIFTY 50
            </Flex>
            <Box display='flex' alignItems='center' gap={1} ml={12}>
            <FaRupeeSign/>
            <Text>22172.50</Text>
            <Flex color='green' alignItems='center' gap={1}>
            <ArrowUpIcon />
            (0.73 %)
            </Flex>
            
            
            </Box>
        </Box>
        
    </Flex>
        <Box id='nav2' display={{base:'flex',md:'none'}} w={'100%'} mt={4} p={1} position='fixed' zIndex='sticky' bottom='0'
         cursor='pointer' rounded='md' bg='gray.50' color='#9BABC6' justifyContent='space-around'>
                <Text 
                 onClick={() => handleTabClick('5 min')}
                 bg={activeTab === '5 min' ? 'blue.400' : 'transparent'}
                 color={activeTab === '5 min' ? 'white' : '#9BABC6'}
                 px={2}
                 py={1}
                 rounded='md'>
                    5 min</Text>
                <Text  onClick={() => handleTabClick('10 min')}
            bg={activeTab === '10 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '10 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                10 min</Text>
                <Text  onClick={() => handleTabClick('15 min')}
            bg={activeTab === '15 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '15 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                15 min</Text>
                <Text  onClick={() => handleTabClick('30 min')}
            bg={activeTab === '30 min' ? 'blue.400' : 'transparent'}
            color={activeTab === '30 min' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                30 min</Text>
                <Text  onClick={() => handleTabClick('hour')}
            bg={activeTab === 'hour' ? 'blue.400' : 'transparent'}
            color={activeTab === 'hour' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>
                hour</Text>
                <Text  onClick={() => handleTabClick('1 Day')}
            bg={activeTab === '1 Day' ? 'blue.400' : 'transparent'}
            color={activeTab === '1 Day' ? 'white' : '#9BABC6'}
            px={2}
            py={1}
            rounded='md'>1 Day</Text>
            </Box>
    </Box>
  )
}



export default Navbar
//`https://technicals.zerodha.com/static/media/NSE.62a33981.svg`
//`https://technicals.zerodha.com/static/media/poweredByStreak.9b530bec.png`
//"https://technicals.zerodha.com/static/media/zerodha_logo.3f3f94bf.svg";