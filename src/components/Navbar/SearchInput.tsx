import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" mb={1} />
        </InputLeftElement>
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          height="2rem"
          bg="gray.50"
          _placeholder={{ color: "gray.500" }}
          _hover={{ bg: "white", border: "1px solid blue.500" }}
          _focus={{ outline: "none", border: "1px solid blue.500" }}
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
