import React, { FC } from 'react';
import { GridItem, GridItemProps } from './GridItem';

interface GridProps {
  items: GridItemProps[];
}

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="columns-2 gap-4">
      {items.map((item, index) => (
        <GridItem key={item._id} {...item} isBigger={index === 0 || index === items.length - 1} />
      ))}
    </div>
  );
};
