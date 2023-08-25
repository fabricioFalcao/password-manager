import { FormDataType } from '../types';

type ServiceProps = {
  serviceCard: FormDataType,
  handleDeletion: () => void,
  hidePasswords: boolean,
};

function ServiceCard({ serviceCard, handleDeletion, hidePasswords }: ServiceProps) {
  const { login, password, service, url } = serviceCard;
  return (
    <div>
      <a href={ url } target="_blank" rel="noopener noreferrer">{service}</a>
      <p>{login}</p>
      <p>{hidePasswords ? '******' : password}</p>
      <button data-testid="remove-btn" onClick={ handleDeletion }>Deletar</button>
    </div>
  );
}

export default ServiceCard;
