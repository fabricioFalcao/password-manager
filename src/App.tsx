import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div>
      <Title>Gerenciador de senhas</Title>
      {
      !showForm
        ? <button onClick={ () => setShowForm(true) }>Cadastrar nova senha</button>
        : <Form setShowForm={ setShowForm } />
      }

    </div>
  );
}

export default App;
