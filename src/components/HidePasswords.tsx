import { SetStateType } from '../types';

type HidePasswordsProps = {
  hidePasswords: boolean,
  setHidePasswords: SetStateType,
};

function HidePasswords({ hidePasswords, setHidePasswords }: HidePasswordsProps) {
  return (
    <div>
      <label htmlFor="hide-password">Esconder senhas</label>
      <input
        type="checkbox"
        id="hide-password"
        onChange={ () => setHidePasswords(!hidePasswords) }
      />
    </div>
  );
}

export default HidePasswords;
