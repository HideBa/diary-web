import React from "react";
import { Input as ChakraInput } from "@chakra-ui/react";

type Input = "password" | "email" | undefined;

export type Props = {
  className?: string;
  onChange?: () => void;
  placeHolder?: string;
  initialValue?: string;
  value?: string;
  type?: string;
  size?: string;
};

const Input: React.FC<Props> = ({
  className,
  onChange,
  placeHolder,
  value,
  type = "text",
  size,
}) => {
  return (
    <ChakraInput
      className={className}
      placeholder={placeHolder}
      value={value}
      type={type}
      size={size}
      onChange={onChange}
    />
  );
};

export default Input;
