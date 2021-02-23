import React, { ChangeEvent } from "react";
import { Input as ChakraInput } from "@chakra-ui/react";
import Flex from "../Flex";
import Text from "../Text";

type Input = "password" | "email" | undefined;

export type Props = {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  initialValue?: string;
  value?: string;
  type?: string;
  size?: string;
  error?: string;
};

const Input: React.FC<Props> = ({
  className,
  onChange,
  placeHolder,
  value,
  type = "text",
  size,
  error,
}) => {
  return (
    <Flex>
      <ChakraInput
        className={className}
        placeholder={placeHolder}
        value={value}
        type={type}
        size={size}
        onChange={onChange}
      />
      {error && <Text color="red">{error}</Text>}
    </Flex>
  );
};

export default Input;
