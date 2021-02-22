import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import Icon, { IconType } from "../Icon";
import Flex from "../Flex";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

export type Props = {
  className?: string;
  variant?: ButtonVariant;
  color?: string;
  colorSchema?: string;
  text?: string;
  icon?: IconType;
  iconPlace?: "left" | "right";
};

const Button: React.FC<Props> = ({
  className,
  variant = "solid",
  color,
  colorSchema,
  text,
  icon,
  iconPlace = "left",
}) => {
  return (
    <ChakraButton className={className} variant={variant} colorScheme={colorSchema} color={color}>
      <Flex>
        {iconPlace === "left" && icon && <Icon icon={icon} />}
        {text}
        {iconPlace === "right" && icon && <Icon icon={icon} />}
      </Flex>
    </ChakraButton>
  );
  // return <ChakraButton left={iconPlace === "left" ? <Icon icon={icon} /> : undefined} rightIcon={iconPlace === "right" && }>{text}</ChakraButton>;
};

export default Button;
