import { FormDataType } from '../types';

type ServiceProps = {
  serviceCard: FormDataType,
  handleDeletion: () => void,
};

function ServiceCard({ serviceCard, handleDeletion }: ServiceProps) {
  const { login, password, service, url } = serviceCard;
  return (
    <div>
      <a href={ url } target="_blank" rel="noopener noreferrer">{service}</a>
      <p>{login}</p>
      <p>{password}</p>
      <button data-testid="remove-btn" onClick={ handleDeletion }>Deletar</button>
    </div>
  );
}

export default ServiceCard;
