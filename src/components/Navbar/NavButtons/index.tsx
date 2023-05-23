import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";

type NavButtonsProps = {
  // user: any;
};

const NavButtons: React.FC<NavButtonsProps> = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default NavButtons;
