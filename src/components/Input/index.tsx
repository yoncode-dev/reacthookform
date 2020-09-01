import React, { useState, useCallback } from 'react';
import { FieldError } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Title, Errostyle, Headerinput } from './styles';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  title?: string;
  register: RefReturn;
  errors: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  title,
  register,
  errors,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return (
    <>
      <Headerinput>
        {title && <Title>{title}</Title>}
        {errors && <Errostyle>{errors?.message}</Errostyle>}
      </Headerinput>

      <Container focused={focused}>
        <input
          name={name}
          type={type}
          ref={register}
          placeholder={placeholder}
          onFocus={handleFocused}
          onBlur={handleBlur}
        />
        {errors && <FiAlertCircle size={24} />}
      </Container>
    </>
  );
};

export default Input;
