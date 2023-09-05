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
        <li key={title}>
          <Link title={title} />
        </li>
      ))}
    </ul>
  );
};

export default List;
