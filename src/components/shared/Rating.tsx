import {HStack, IconButton} from "@chakra-ui/react";
import React from "react";
import {EmptyStar, FullStar} from "../../../public/svg";

interface RatingProps {
  starSize?: number;
  styleProps?: any;
  onClick?: (rate: number) => void;
  _rate: number;
  shouldRound?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  starSize = 40,
  styleProps,
  _rate,
  onClick,
  shouldRound = true,
}) => {
  const rate = shouldRound ? Math.round(_rate) : _rate;
  return (
    <HStack {...styleProps}>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <IconButton
            _notFirst={{marginInlineStart: 0}}
            disabled={onClick ? false : true}
            cursor="pointer"
            _hover={{}}
            _focus={{}}
            key={star}
            bg="initial"
            aria-label="star"
            boxShadow={"none"}
            fontSize={`${starSize}px`}
            as={star <= rate ? FullStar : EmptyStar}
            size={`${starSize}px`}
            onClick={onClick ? () => onClick(star) : undefined}
          />
        );
      })}
    </HStack>
  );
};
