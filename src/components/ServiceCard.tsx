import { FormDataType } from '../types';

type ServiceProps = {
  serviceCard: FormDataType
};

function ServiceCard({ serviceCard }: ServiceProps) {
  const { login, password, service, url } = serviceCard;
  return (
    <div>
      <a href={ url } target="_blank" rel="noopener noreferrer">{service}</a>
      <p>{login}</p>
      <p>{password}</p>
    </div>
  );
}

export default ServiceCard;
