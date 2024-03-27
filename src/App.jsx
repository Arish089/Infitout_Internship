import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { useSlider } from "@chakra-ui/react";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function App() {


    return (
        <Box>
            <Navbar />
            <Home />
            <Footer />
        </Box>
    );
}
