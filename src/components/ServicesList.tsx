import { FormDataType } from '../types';
import ServiceCard from './ServiceCard';

type ListProps = {
  servicesList: FormDataType[],
  handleDeletion: (login: string) => void,
};

function ServicesList({ servicesList, handleDeletion }: ListProps) {
  return (
    <div>
      {servicesList.length === 0 && <h2>Nenhuma senha cadastrada</h2>}
      {servicesList.map((serviceCard) => (
        <ServiceCard
          key={ serviceCard.login }
          serviceCard={ serviceCard }
          handleDeletion={ () => handleDeletion(serviceCard.login) }
        />
      ))}
    </div>
  );
}

export default ServicesList;
