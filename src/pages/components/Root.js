import { ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";
import theme from "./theme";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Flex>
          <SideNav />
          <BottomNav />
          <Outlet />
        </Flex>
      </ChakraProvider>
    </>
  );
}
