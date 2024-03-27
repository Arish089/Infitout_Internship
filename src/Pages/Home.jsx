import { Box, Flex, SimpleGrid, Spacer,Badge
    ,Text,Tooltip,useDisclosure,Modal,ModalBody,ModalCloseButton,ModalHeader
,ModalOverlay,Button,ModalContent,ModalFooter, FormControl,Input, Grid } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { InfoOutlineIcon } from "@chakra-ui/icons";
import CustomSlider from '../Components/CustomSlider'
import { CustomSlider1 } from '../Components/CustomSlider';
import { ChevronDownIcon } from "@chakra-ui/icons";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [newValue,setNewValue] = useState(8)

    const [showDetails, setShowDetails] = useState(false);
    const [showDetails1,setShowDetails1] = useState(false)
    
    const [bull,setBull] = useState(null)
    const [bear,setBear] = useState(null)
    const [neutral,setNeutral] = useState(null)

    const handleSubmit = ()=>{
        
            
                console.log(Math.ceil(Number(bull/Number(Number(bear)+Number(bull))) * 16));
                setNewValue(Math.ceil((bull/Number(Number(bear)+Number(bull))) * 16))
            
        
    }

    useEffect(()=>{

    },[newValue])
    const toggleDetails1 =()=>{
        setShowDetails1(!showDetails1);
    }

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
    
  return (
    <Box p={{base:2,lg:20}} bg='gray.50' mt={{base:'160px',md:'210px',lg:'160px'}} >
        <Button onClick={onOpen} colorScheme='blue'>Enter Values</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Input Data</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <FormControl >
        <Input m={2} type='number' placeholder='Enter no of Bearish Stocks' value={bear}
         onChange={(e)=>setBear(e.target.value)}/>
        <Input m={2} type='number' placeholder='Enter no of Neutral Stocks' value={neutral}
        onChange={(e)=>setNeutral(e.target.value)}/>
        <Input m={2} type='number' placeholder='Enter no of Bullish Stocks' value={bull}
        onChange={(e)=>setBull(e.target.value)}/>
      </FormControl>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
        Submit
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

        <Grid m='auto' templateColumns={{sm:'repeat(1, 1fr)',md:'repeat(2, 1fr)'}} gap={{md:4,lg:10}}  >
            <Flex boxShadow='lg' rounded='md' direction='column'  justifyContent='center' px={{base:1,sm:10}} py={10} bg='white' >
            <Flex justifyContent='space-between'>
                <Text>Summary</Text>
            
                <Tooltip p={5} bg='white' color='black' label="Here is a Snapshot of the most popular technical indicators. We take these into consideration,
                 analyze them, run some internal calculations and help you understand the overall market conditions." aria-label='A tooltip'>
                     <InfoOutlineIcon />
                     </Tooltip>
            </Flex>
            <Box ><CustomSlider newValue={newValue}/></Box>
            <Flex m='auto' mt={{base:4,lg:0}} gap={{base:2,sm:4,md:6,lg:10}}>
                <Box display='flex' flexDirection='column' alignItems='center'>{bear}
                    <Badge py={2} px={4} colorScheme='red' rounded='md'>Bearish</Badge>
                </Box>
                
                <Box display='flex' flexDirection='column' alignItems='center'>{neutral}
                    <Badge py={2} px={4} colorScheme='gray' rounded='md'>Neutral</Badge>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>{bull}
                    <Badge py={2} px={4} colorScheme='green' rounded='md'>Bullish</Badge>
                </Box>
            </Flex>
            <Flex m='auto' gap={{base:2,sm:4,md:6,lg:10}}>
                <Flex direction='column' justifyContent='center' alignItems='center' pt={2}>
                    22069.65 <br /> <span style={{color:"#9BABC6"}}>EMA (20)</span>
                    -103.71  <br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>Awesome Osc.</span>
                </Flex>
                <Flex direction='column' justifyContent='center' alignItems='center' pt={2}>
                22149.21 <br /> <span style={{color:"#9BABC6"}}>SMA (20)</span>
                8.24  <br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>Macd (12, 26, 9)</span>
                </Flex>
                <Flex direction='column' justifyContent='center' alignItems='center' pt={2} textAlign='center'>
                48.70 <br /> <span style={{color:"#9BABC6"}}>RSI(14)</span>
                -57.57  <br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>CCI (20)</span>
                </Flex>
            </Flex>
                </Flex> 
                
                <Flex rounded='md' boxShadow='lg' direction='column' justifyContent='center' px={{base:1,sm:10}} py={10} bg='white'>
            <Flex justifyContent='space-between'>
            <Text>Support & Resistance</Text>
            <Tooltip p={5} bg='white' color='black' label="Support: Support prevents the price from falling further. It is a price point on the chart where the trader
             expects maximum demand (in terms of buying) coming into the stock/index. Whenever the price falls to the support line, it is likely to bounce back.
              Resistance is something that stops the price from rising further. The resistance level is a price point on the chart where traders expect maximum supply (in terms of selling) for the stock/index.
               The resistance level is always above the current market price." aria-label='A tooltip'>
                     <InfoOutlineIcon />
                     </Tooltip>
            </Flex>
            <Box ><CustomSlider1 newValue={6}/></Box>
            <Flex m='auto' gap={{base:2,sm:4,md:6,lg:10}}>
                <Flex direction='column' justifyContent='center' alignItems='center' pt={2}>
                    2156.17<br /> <span style={{color:"#9BABC6"}}>S1</span>
                    2243.47  <br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>R1</span>
                </Flex>
                <Flex direction='column' justifyContent='center' alignItems='center' pt={2}>
                21169.53 <br /> <span style={{color:"#9BABC6"}}>S2</span>
                22704.13<br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>R2</span>
                </Flex>
                <Flex direction='column' justifyContent='center' alignItems='center' textAlign='center' pt={2}>
                20402.23<br /> <span style={{color:"#9BABC6"}}>S3</span>
                23471.43<br /> <span style={{color:"#9BABC6",textWrap:'wrap'}}>R3</span>
                </Flex>
            </Flex>
                </Flex>

                <Flex boxShadow='lg' rounded='md' direction='column' justifyContent='center' px={{base:1,sm:10}} py={10}
                bg='white' maxHeight={!showDetails ?'400px':'fit-content'}>
            <Flex justifyContent='space-between'>
            <Text>Moving averages</Text>
            
            </Flex>
            <Box ><CustomSlider newValue={6}/></Box>
            <Flex m='auto' mt={{base:4,lg:0}} gap={{base:2,sm:4,md:6,lg:10}}>
                <Box display='flex' flexDirection='column' alignItems='center'>7
                    <Badge py={2} px={4} colorScheme='red' rounded='md'>Bearish</Badge>
                </Box>
                
                <Box display='flex' flexDirection='column' alignItems='center'>2
                    <Badge py={2} px={4} colorScheme='gray' rounded='md'>Neutral</Badge>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>8
                    <Badge py={2} px={4} colorScheme='green' rounded='md'>Bullish</Badge>
                </Box>
            </Flex>
            
            <Flex direction='column' px={{base:5,sm:10,md:15,lg:20}}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    EMA (5)
                    </Flex>
                    
                    22012.25
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
      {/* Additional elements to be shown/hidden */}
      {showDetails && (
        <Box>
          {/* Include your additional elements here */}
          <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='red' mx={1}>S</Badge>
                    SMA (5)
                    </Flex>
                    
                    21953.99
                </Flex>
        </Box>
      )}

      {/* "View Details" line */}
      <Flex
        onClick={toggleDetails}
        cursor="pointer"
        alignItems="center"
        justifyContent="flex-end" // Align to the bottom when visible
      >
        <Text>View Details</Text>
        <ChevronDownIcon />
      </Flex>
    </Flex>
    </Flex>

                <Flex boxShadow='lg' bg='white' rounded='md' direction='column' justifyContent='center'px={{base:1,sm:10}} py={10} maxHeight={!showDetails1 ?'400px':null} >
                    
            <Flex justifyContent='space-between'>
            <Text>Oscillators</Text>
            <Tooltip p={5} bg='white' color='black' label="They form a majority of the leading technical indicators and they oscillate between a local minimum & maximum.
             The interpretation varies based on the position of the oscillator on the chart." aria-label='A tooltip'>
                     <InfoOutlineIcon />
                     </Tooltip>
            </Flex>
            <Box ><CustomSlider newValue={6}/></Box>
            <Flex m='auto' mt={{base:4,lg:0}} gap={{base:2,sm:4,md:6,lg:10}}>
                <Box display='flex' flexDirection='column' alignItems='center'>2
                    <Badge py={2} px={4} colorScheme='red' rounded='md'>Bearish</Badge>
                </Box>
                
                <Box display='flex' flexDirection='column' alignItems='center'>8
                    <Badge py={2} px={4} colorScheme='gray' rounded='md'>Neutral</Badge>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center'>0
                    <Badge py={2} px={4} colorScheme='green' rounded='md'>Bullish</Badge>
                </Box>
            </Flex>
            <Flex direction='column' px={{base:5,sm:10,md:15,lg:20}}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
      {/* Additional elements to be shown/hidden */}
      {showDetails1 && (
        <Box>
          {/* Include your additional elements here */}
          <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    RSI (14)
                    </Flex>
                    
                    48.70
                </Flex>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Flex alignItems='center'>
                    <Badge px={1} colorScheme='gray' mx={1}>N</Badge>
                    Stoch&K (14, 3, 3)
                    </Flex>
                    
                    36.07
                </Flex>
        </Box>
      )}

      {/* "View Details" line */}
      <Flex
        onClick={toggleDetails1}
        cursor="pointer"
        alignItems="center"
        justifyContent="flex-end" // Align to the bottom when visible
      >
        <Text>View Details</Text>
        <ChevronDownIcon />
      </Flex>
    </Flex>
            </Flex>
        </Grid>
        </Box>
  )
}

export default Home