import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useSlider } from "@chakra-ui/react";
import { useEffect } from "react";
import React from 'react'

const CustomSlider = ({newValue}) => {
    const {
        state,
        actions,
        getRootProps,
        getThumbProps,
        getTrackProps
    } = useSlider({ min: 0, max: 16, step: 1 }); // Adjust the min, max, and step values as needed

    const updateSliderValue = ()=>{
        actions.stepTo(newValue)
    }

    useEffect(()=>{
        updateSliderValue(newValue)
    })
    const { ...thumbProps } = getThumbProps();

    const markers = [];

    for (let i = 0; i <= 16; i++) {
        markers.push(i * 6.25);
    }

    return (
        <Box px={8} pt={['10%', '15%']} pb={['10%', '15%']}>
            <Flex
                alignItems={['center', 'flex-start']}
                justifyContent="center"
                mt={[4, 0]}
            >
                <Box
                    mt={2}
                    cursor="pointer"
                    w={['100%', '96%', '98%']}
                    //ml={['0', '2%', '1%']}
                    {...getRootProps()}
                >
                    {markers.map((value, index) => (
                        <Badge
                            key={index}
                            bg={index <=7 ? `red.${markers.length - index - 9}00` :
                               index == 8 ? 'grey': index > 8 ?`green.${index + 9 - markers.length}00`:null }
                            h={index <= 8 ? `${10* (markers.length - index - 4)}px`
                            :`${10* (index - 3)}px`}
                            w="1px"
                            ml='-15px'
                            fontSize='0'
                            zIndex={0}
                            color='blue'
                            position="absolute"
                            left={`${value}%`}
                            transform="translateX(-50%)"
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                        >
                            {}
                        </Badge>
                    ))}
                    <Box h="7px" zIndex={-1} bgColor="white" borderRadius="full" {...getTrackProps()}>
                        <Box
                            h="4px"
                            w={`${state.value * 6.25}%`}
                            bgColor="white"
                            borderRadius="full"
                        />
                    </Box>
                    <Box
                        top="1%"
                        boxSize={6}
                        bgColor="white"
                        boxShadow="lg"
                        border="2px solid teal"
                        borderWidth="4px" // Inner border
                        borderColor="red"
                        borderRadius="full"
                        _focusVisible={{ outline: "none" }}
                        {...thumbProps}
                        position="absolute"
                        left={`${state.value * 6.25}%`}
                        transform="translateX(-50%)"
                    >
                        <Flex w="100%" h="100%" alignItems="center" zIndex={1} justifyContent="center">
                            <Text color="teal">{}</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export const CustomSlider1 = ({newValue}) => {
    const {
        state,
        actions,
        getRootProps,
        getThumbProps,
        getTrackProps
    } = useSlider({ min: 0, max: 16, step: 1 }); // Adjust the min, max, and step values as needed

    const updateSliderValue = ()=>{
        actions.stepTo(newValue)
    }

    useEffect(()=>{
        updateSliderValue(newValue)
    })
    const { ...thumbProps } = getThumbProps();

    const markers = [];

    for (let i = 0; i <= 16; i++) {
        markers.push(i * 6.25);
    }

    return (
        <Box px={8} pt={['10%', '15%']} pb={['10%', '15%']}>
            <Flex
                alignItems={['center', 'flex-start']}
                justifyContent="center"
                mt={[4, 0]}
            >
                <Box
                    mt={2}
                    cursor="pointer"
                    w={['100%', '96%', '98%']}
                    //ml={['0', '2%', '1%']}
                    {...getRootProps()}
                >
                    {markers.map((value, index) => (
                        <Badge
                            key={index}
                            bg={index <=8 ? `blue.${markers.length - index - 8}00` :
                                index > 8 ?`blue.${index + 9 - markers.length}00`:null }
                            h='120px'
                            w="1px"
                            ml='-15px'
                            fontSize='0'
                            zIndex={0}
                            color='blue'
                            position="absolute"
                            left={`${value}%`}
                            transform="translateX(-50%)"
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                        >
                            {}
                        </Badge>
                    ))}
                    <Box h="7px" zIndex={-1} bgColor="white" borderRadius="full" {...getTrackProps()}>
                        <Box
                            h="4px"
                            w={`${state.value * 6.25}%`}
                            bgColor="white"
                            borderRadius="full"
                        />
                    </Box>
                    <Box
                        top="1%"
                        boxSize={6}
                        bgColor="white"
                        boxShadow="lg"
                        border="2px solid teal"
                        borderWidth="4px" // Inner border
                        borderColor="red"
                        borderRadius="full"
                        _focusVisible={{ outline: "none" }}
                        {...thumbProps}
                        position="absolute"
                        left={`${state.value * 6.25}%`}
                        transform="translateX(-50%)"
                    >
                        <Flex w="100%" h="100%" alignItems="center" zIndex={1} justifyContent="center">
                            <Text color="teal">{}</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}

export default CustomSlider