import { useState } from 'react';
import { FormDataType, SetShowFormType } from '../types';

const INITIAL_STATE = {
  service: '',
  login: '',
  password: '',
  url: '',
} as FormDataType;

function Form({ setShowForm }:SetShowFormType) {
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

  // const serviceFilledIn = formData.service.trim().length > 0;
  // const loginFilledIn = formData.login.trim().length > 0;
  // const passwordAbove8 = formData.password.trim().length >= 8;
  // const passwordBelow16 = formData.password.trim().length <= 16;
  // const passwordNumbersAndLetters = /(?=.*[0-9])(?=.*[a-zA-Z])/.test(formData.password);
  // const passwordSpecialCharacter = /[^a-zA-Z0-9_]/.test(formData.password);
  // const validForm = (serviceFilledIn && loginFilledIn && passwordAbove8 && passwordBelow16
  //     && passwordNumbersAndLetters && passwordSpecialCharacter);

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
    <div>
      <form action="">
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
  );
}

export default Form;
