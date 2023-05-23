import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import NavButtons from "./NavButtons";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex bg="white" w="100%" h="44px" p="0.6rem 0.8rem">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="reddit logo" h="30px" />
        <Image
          src="/images/redditText.svg"
          alt="reddit text"
          h="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <NavButtons /> {/* Right side of the navbar */}
    </Flex>
  );
};
export default Navbar;
