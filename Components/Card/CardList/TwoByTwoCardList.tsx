import React from "react";
import styled from "styled-components";
import { beerItemType, CardType, POPULAR_BEER_TITLE } from "../../../static";
import { BeerResultType } from "../../../types";
import CardItem from "../CardItem";
import CardTitle from "../CardTitle";

interface TwoByTwoCardListProps {
  title: string;
  itemList: BeerResultType[];
}

const TwoByTwoCardList: React.FC<TwoByTwoCardListProps> = ({
  title,
  itemList,
}) => {
  const cardType =
    title === POPULAR_BEER_TITLE ? CardType.POPULAR : CardType.RECOMMEND;

  return (
    <Container>
      <CardTitle title={title} />
      <CardContainer>
        {itemList.map((item, idx) => {
          return (
            <CardItem
              isTwoByTwo
              cardType={cardType}
              key={idx} // 수정해야함.
              beerName={item.name_ko}
              img_src={item.image_url}
              sort={item.category.name_ko}
              country={item.country.code}
            />
          );
        })}
      </CardContainer>
    </Container>
  );
};

export const CardContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-top: 35px;
`;

export default TwoByTwoCardList;
