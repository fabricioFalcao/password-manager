function Form() {
  return (
    <div>
      <label htmlFor="service">Nome do serviço</label>
      <input type="text" id="service" />
      <br />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" />
      <br />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <br />
      <label htmlFor="url">URL</label>
      <input type="text" id="url" />
      <br />
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  );
}

export default Form;
