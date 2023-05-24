import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/client";
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
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { ERROR_CODES } from "@/src/firebase/errors";

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
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

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

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
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
      <Text mb={4} fontSize="8pt" color="red.500" ps={4}>
        {ERROR_CODES[error?.message as keyof typeof ERROR_CODES]}
      </Text>
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
      <Button type="submit" width="100%" my={2} py={2} isLoading={loading}>
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
  // recoil state
  const setAuthModalState = useSetRecoilState(authModalState);

  // form state
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // form error state
  const [formError, setFormError] = useState("");

  /**
   * @name createUserWithEmailAndPassword
   * @description react-firebase-authentification hook
   * @link https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth#usecreateuserwithemailandpassword
   * @link https://firebase.google.com/docs/auth/web/password-auth
   * @param auth firebase auth instance
   */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  /**
   * show password state and function to toggle it
   */
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  /**
   * @name onChange
   * @description function to handle the form change
   * @param e event
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /**
   * @name onSubmit
   * @description function to handle the form submission
   * @param e event
   * @returns void
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formError) setFormError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setFormError("Les mots de passe ne correspondent pas");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "100%" }}>
      <Input
        name="email"
        placeholder="Adresse mail"
        type="email"
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
        type="password"
        mb={1}
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
      <Text mb={4} fontSize="8pt" color="red.500" ps={4}>
        {formError || ERROR_CODES[error?.message as keyof typeof ERROR_CODES]}
      </Text>
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
      <Button type="submit" width="100%" mt={2} py={2} isLoading={loading}>
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
