import { css } from "styled-system/css";
import { Box, Flex } from "styled-system/jsx";

export default function Home() {
  return (
    <Flex justify={"center"} align={"center"} direction={"column"} h={"100dvh"}>
      <div className={css({ fontSize: "6xl", fontWeight: "bold" })}>
        Hello with css() 🐼!
      </div>
      <Box fontSize={"6xl"} fontWeight={"bold"} color="secondary">
        Hello with props 🐼!
      </Box>
    </Flex>
  );
}
