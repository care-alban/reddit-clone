import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthInputs from "./AuthInputs";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { ResetPassword } from "./AuthForms";
import OAuthButtons from "./OAuthButtons";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent py={10} px={20}>
          <ModalHeader fontWeight="700" p={0} mt={6}>
            {modalState.view === "login" && "Se connecter"}
            {modalState.view === "signup" && "S'inscrire"}
            {modalState.view === "resetPassword" &&
              "Réinitialiser le mot de passe"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={0}
          >
            <Text mt={2} fontSize="10pt">
              En continuant, vous créez un compte Reddit et vous acceptez nos{" "}
              <Link as={NextLink} href="#">
                Conditions générales d&rsquo;utilisation
              </Link>{" "}
              ainsi que notre{" "}
              <Link as={NextLink} href="#">
                Politique de confidentialité
              </Link>
              .
            </Text>
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="100%"
              my={4}
            >
              <OAuthButtons />
              <Flex width="100%" alignItems="center">
                <Text
                  borderTop="1px solid"
                  borderColor="gray.200"
                  width="40%"
                />
                <Text
                  color="gray.500"
                  fontWeight={700}
                  width="20%"
                  align="center"
                >
                  OU
                </Text>
                <Text
                  borderTop="1px solid"
                  borderColor="gray.200"
                  width="40%"
                />
              </Flex>
              <AuthInputs />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
