import { useState } from 'react';
import { FormDataType } from '../types';
import ServiceCard from './ServiceCard';
import HidePasswords from './HidePasswords';

type ListProps = {
  servicesList: FormDataType[],
  handleDeletion: (login: string) => void,
};

function ServicesList({ servicesList, handleDeletion }: ListProps) {
  const [hidePasswords, setHidePasswords] = useState<boolean>(false);

  return (
    <div>
      {servicesList.length === 0 && <h2>Nenhuma senha cadastrada</h2>}
      {servicesList.map((serviceCard) => (
        <>
          <HidePasswords
            hidePasswords={ hidePasswords }
            setHidePasswords={ setHidePasswords }
          />
          <ServiceCard
            key={ serviceCard.login }
            serviceCard={ serviceCard }
            handleDeletion={ () => handleDeletion(serviceCard.login) }
            hidePasswords={ hidePasswords }
          />
        </>
      ))}
    </div>
  );
}

export default ServicesList;
