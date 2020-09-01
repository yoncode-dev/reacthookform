import React from 'react';

import { Container } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface RadioProps {
  id: string;
  name: string;
  register: RefReturn;
  checked?: boolean;
  namedisplay: string;
}

const Radio: React.FC<RadioProps> = ({
  id,
  name,
  register,
  checked,
  namedisplay,
}) => {
  return (
    <Container>
      <label>
        <input
          type="radio"
          name={name}
          id={id}
          value={id}
          ref={register}
          checked={checked}
        />
        <span className="checkmark" />
        {namedisplay}
      </label>
    </Container>
  );
};

export default Radio;
