import { auth } from "@/src/firebase/client";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={4}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
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
      <Button
        variant="oauth"
        mb={4}
        isLoading={loading}
        onClick={() => signInWithGoogle}
      >
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
      <Text mb={4} fontSize="8pt" color="red.500" ps={4}>
        {error?.message}
      </Text>
    </Flex>
  );
};

export default OAuthButtons;
