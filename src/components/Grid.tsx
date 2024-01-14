import React from 'react';
import { GridItem, GridItemProps } from './GridItem';
import { MotionDiv } from './Motion';
import { ANIMATION_DEFAULT } from '@/constants/animations';

interface GridProps {
  items: GridItemProps[];
}

export const Grid = ({ items }: GridProps) => {
  const evenIndexCards = items.filter((_, index) => index % 2 === 0);
  const oddIndexCards = items.filter((_, index) => index % 2 !== 0);

  return (
    <div className="columns-2 gap-3 md:gap-4">
      <MotionDiv
        className="flex flex-col gap-3 md:gap-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...ANIMATION_DEFAULT, duration: 1.5, opacity: { duration: 0.5 } }}
      >
        {oddIndexCards.map((item, index) => (
          <GridItem key={item._id} {...item} isBigger={index === 0} />
        ))}
      </MotionDiv>
      <MotionDiv
        className="flex flex-col gap-3 md:gap-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...ANIMATION_DEFAULT, duration: 1.5, opacity: { duration: 0.5 } }}
      >
        {evenIndexCards.map((item, index) => (
          <GridItem key={item._id} {...item} isBigger={index === oddIndexCards.length - 1} />
        ))}
      </MotionDiv>
    </div>
  );
};
