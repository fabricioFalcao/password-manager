import { useState } from 'react';
import { FormDataType, SetStateType } from '../types';

const INITIAL_STATE = {
  service: '',
  login: '',
  password: '',
  url: '',
} as FormDataType;

const validClass = 'valid-password-check';
const invalidClass = 'invalid-password-check';

type FormProps = {
  setShowForm: SetStateType;
  handleSubmit: (formData: FormDataType) => void;
};

function Form({ setShowForm, handleSubmit }: FormProps) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { service, login, password, url } = formData;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(formData);
    setShowForm(false);
  };

  const formFieldsCheck = {
    serviceFilledIn: formData.service.trim().length > 0,
    loginFilledIn: formData.login.trim().length > 0,
    passwordAbove8: formData.password.trim().length >= 8,
    passwordBelow16: formData.password.trim().length <= 16,
    passwordNumbersAndLetters: /(?=.*[0-9])(?=.*[a-zA-Z])/.test(formData.password),
    passwordSpecialCharacter: /[^a-zA-Z0-9_]/.test(formData.password),
  };
  const validForm = (
    formFieldsCheck.serviceFilledIn
    && formFieldsCheck.loginFilledIn
    && formFieldsCheck.passwordAbove8
    && formFieldsCheck.passwordBelow16
    && formFieldsCheck.passwordNumbersAndLetters
    && formFieldsCheck.passwordSpecialCharacter
  );

  return (
    <>
      <div>
        <form action="" onSubmit={ onSubmit }>
          <label htmlFor="service">Nome do serviço</label>
          <input
            type="text"
            id="service"
            required
            value={ service }
            onChange={ handleChange }
          />
          <br />
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            required
            value={ login }
            onChange={ handleChange }
          />
          <br />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            required
            value={ password }
            onChange={ handleChange }
          />
          <br />
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            value={ url }
            onChange={ handleChange }
          />
          <br />
          <button type="submit" disabled={ !validForm }>Cadastrar</button>
          <button onClick={ () => setShowForm(false) }>Cancelar</button>
        </form>
      </div>

      <aside>
        <p
          className={ formFieldsCheck.passwordAbove8
            ? validClass : invalidClass }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ formFieldsCheck.passwordBelow16
            ? validClass : invalidClass }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ formFieldsCheck.passwordNumbersAndLetters
            ? validClass : invalidClass }
        >
          Possuir letras e números
        </p>
        <p
          className={ formFieldsCheck.passwordSpecialCharacter
            ? validClass : invalidClass }
        >
          Possuir algum caractere especial
        </p>
      </aside>
    </>

  );
}

export default Form;
