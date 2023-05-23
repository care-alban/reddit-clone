import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

type AuthButtonsProps = {
  // user: any;
};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="1.8rem"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "4.375rem", sm: "6.875rem" }}
        mr={2}
        onClick={() => setAuthModalState({ isOpen: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        height="1.8rem"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "4.375rem", sm: "6.875rem" }}
        mr={2}
        onClick={() => setAuthModalState({ isOpen: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
