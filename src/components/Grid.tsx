import React, { FC } from "react";
import { GridItem, GridItemProps } from "./GridItem";
import { css } from "styled-system/css";

interface GridProps {
  items: GridItemProps[];
}

export const Grid: FC<GridProps> = ({ items }) => {
  return (
    <div className={css({ columns: 2, columnGap: "4" })}>
      {items.map((item) => (
        <GridItem key={item._id} {...item} />
      ))}
    </div>
  );
};
