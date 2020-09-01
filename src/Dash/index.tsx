import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { Container, Formcontent, Buttonform } from './styles';

//Componentes
import Input from '../components/Input';
import Check from '../components/Checkbox';
import Radio from '../components/Radio';

const languages = [
  { id: 1, name: 'javascript' },
  { id: 2, name: 'asp.net' },
  { id: 3, name: 'html' },
];

type InputsProps = {
  name: string;
  email: string;
  checklan: Array<number>;
  expertise: string;
};

const schema = yup.object().shape({
  name: yup.string().required('Preencha o campo nome'),
  email: yup
    .string()
    .required('Preencha o campo email')
    .email('Informe um e-mail valido'),
});

export default function App() {
  const { register, handleSubmit, reset, errors } = useForm<InputsProps>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: InputsProps) => console.log(data);

  useEffect(() => {
    setTimeout(() => {
      const data = {
        name: 'Leandro Freitas',
        email: 'leandro@yoncode.com',
        checklan: [1, 3],
        expertise: '2',
      } as InputsProps;

      reset(data);
    }, 2000);
  }, [reset]);

  return (
    <Container>
      <Formcontent>
        <h1>react Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="Nome"
            name="name"
            type="text"
            placeholder="informe seu nome"
            register={register}
            errors={errors.name}
          />

          <Input
            title="E-mail"
            name="email"
            type="text"
            placeholder="informe seu email"
            register={register}
            errors={errors.email}
          />

          <Check name="checklan" items={languages} register={register} />

          <Radio
            name="expertise"
            register={register}
            id="1"
            namedisplay="iniciante"
          />
          <Radio
            name="expertise"
            register={register}
            id="2"
            namedisplay="intermediário"
          />
          <Radio
            name="expertise"
            register={register}
            id="3"
            namedisplay="avançado"
          />

          <Buttonform type="submit">Enviar</Buttonform>
        </form>
      </Formcontent>
    </Container>
  );
}
