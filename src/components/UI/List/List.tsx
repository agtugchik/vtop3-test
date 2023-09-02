import React, { FC } from 'react';
import Link from '../Link/Link';

interface IList {
  titles: string[];
  className: string;
}

const List: FC<IList> = ({ className, titles }) => {
  return (
    <ul className={className}>
      {titles.map((title) => (
        <Link key={title} title={title} />
      ))}
    </ul>
  );
};

export default List;
