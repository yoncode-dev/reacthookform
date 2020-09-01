import React from 'react';

import { Container } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface ItemProps {
  id: number;
  name: string;
}

interface Checkprops {
  items: ItemProps[];
  register: RefReturn;
  name: string;
}

const Checkbox: React.FC<Checkprops> = ({ items, register, name }) => {
  return (
    <Container>
      {items.map((check) => (
        <label key={check.id}>
          <input type="checkbox" ref={register} name={name} value={check.id} />
          <span className="checkmark" />
          {check.name}
        </label>
      ))}
    </Container>
  );
};

export default Checkbox;
