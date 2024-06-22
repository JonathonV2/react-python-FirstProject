import Navbar from "./Components/Navbar"
import {  Button, Container, Stack, Text } from "@chakra-ui/react";
import UserGrid from "./Components/UserGrid";
function App() {

  return (
    <stack minH = {"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            My Projects
          </Text>
          🚀
        </Text>
        <UserGrid/>
      </Container>
    </stack>
  )
}

export default App
