import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button variant="oauth" mb={4} onClick={() => {}}>
        <Image
          src="/images/google.png"
          alt="Google icon"
          height="1.25em"
          mr={4}
          position="absolute"
          left="1em"
        />
        Continue with Google
      </Button>
      <Button variant="oauth" onClick={() => {}}>
        <Image
          src="/images/apple.png"
          alt="Google icon"
          height="1.25em"
          mr={4}
          position="absolute"
          left="1em"
        />
        Continue with Apple
      </Button>
    </Flex>
  );
};

export default OAuthButtons;
