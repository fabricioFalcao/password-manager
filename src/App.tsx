import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import ServicesList from './components/ServicesList';
import { FormDataType } from './types';

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [servicesList, setServicesList] = useState<FormDataType[]>([]);

  const handleSubmit = (formData: FormDataType): void => {
    setServicesList([...servicesList, formData]);
  };

  const handleDeletion = (login: string) => {
    setServicesList(servicesList.filter((serviceCard) => serviceCard.login !== login));
  };

  return (
    <div>
      <Title>Gerenciador de senhas</Title>
      {
      !showForm
        ? <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
        : <Form setShowForm={ setShowForm } handleSubmit={ handleSubmit } />
      }
      <ServicesList servicesList={ servicesList } handleDeletion={ handleDeletion } />
    </div>
  );
}

export default App;
