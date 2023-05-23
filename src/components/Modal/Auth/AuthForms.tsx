import { authModalState } from "@/src/atoms/authModalAtom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type LoginProps = {
  // email: string;
  // password: string;
};

export const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <Input
        name="email"
        placeholder="email"
        mb={4}
        onChange={onChange}
        required
        fontSize="10pt"
        bg="gray.50"
        borderRadius="6.25rem"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <InputGroup mb={4}>
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          onChange={onChange}
          required
          fontSize="10pt"
          bg="gray.50"
          borderRadius="6.25rem"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
        <InputRightElement>
          <InputRightElement cursor="pointer">
            {showPassword ? (
              <ViewOffIcon onClick={handleClick} />
            ) : (
              <ViewIcon onClick={handleClick} />
            )}
          </InputRightElement>
        </InputRightElement>
      </InputGroup>
      <Text mb={4} fontSize="10pt">
        Vous avez oublié votre{" "}
        <Box
          as="span"
          color="blue.500"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            "pseudo oublié";
          }}
        >
          pseudo
        </Box>{" "}
        ou{" "}
        <Box
          as="span"
          color="blue.500"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            "mot de passe oublié";
          }}
        >
          mot de passe
        </Box>{" "}
        ?
      </Text>
      <Button type="submit" width="100%" my={2} py={2}>
        Se connecter
      </Button>
      <Flex fontSize="10pt" mt={6}>
        <Text mr={1}>Première fois sur Reddit ?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "signup" }))
          }
        >
          S’inscrire
        </Text>
      </Flex>
    </form>
  );
};

type SignupProps = {
  // email: string;
  // password: string;
  // confirmPassword: string;
};

export const SignUp: React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <Input
        name="email"
        placeholder="Adresse mail"
        mb={4}
        onChange={onChange}
        required
        fontSize="10pt"
        bg="gray.50"
        borderRadius="6.25rem"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <InputGroup mb={4}>
        <Input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="password"
          onChange={onChange}
          required
          fontSize="10pt"
          bg="gray.50"
          borderRadius="6.25rem"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
        />
        <InputRightElement>
          <InputRightElement cursor="pointer">
            {showPassword ? (
              <ViewOffIcon onClick={handleClick} />
            ) : (
              <ViewIcon onClick={handleClick} />
            )}
          </InputRightElement>
        </InputRightElement>
      </InputGroup>
      <Input
        name="confirmPassword"
        placeholder="Confirmation du mot de passe"
        mb={4}
        onChange={onChange}
        required
        fontSize="10pt"
        bg="gray.50"
        borderRadius="6.25rem"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
      />
      <Text mb={4} fontSize="10pt">
        Vous avez oublié votre{" "}
        <Box
          as="span"
          color="blue.500"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            "pseudo oublié";
          }}
        >
          pseudo
        </Box>{" "}
        ou{" "}
        <Box
          as="span"
          color="blue.500"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => {
            "mot de passe oublié";
          }}
        >
          mot de passe
        </Box>{" "}
        ?
      </Text>
      <Button type="submit" width="100%" mt={2} py={2}>
        Continuer
      </Button>
      <Flex fontSize="10pt" mt={6}>
        <Text mr={1}>Déjà Redditor ?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "login" }))
          }
        >
          Se Connecter
        </Text>
      </Flex>
    </form>
  );
};

type ResetPasswordProps = {};

export const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return <div>Reset Password</div>;
};
