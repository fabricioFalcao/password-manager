import { FormDataType } from '../types';
import ServiceCard from './ServiceCard';

type ListProps = {
  servicesList: FormDataType[]
};

function ServicesList({ servicesList }: ListProps) {
  return (
    <div>
      {servicesList.length === 0 && <h2>Nenhuma senha cadastrada</h2>}
      {servicesList.map((serviceCard) => (
        <ServiceCard
          serviceCard={ serviceCard }
          key={ serviceCard.login }
        />
      ))}
    </div>
  );
}

export default ServicesList;
