import styled from 'styled-components';
import { Icon } from './Icon';

const InputIcon = styled.button`
  position: relative;
  bottom: 30%;
  left: 44%;
  background: none;
  border: none;
  cursor: pointer;
`;

interface InputProps {
  icon?: React.FC;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const EyeCloseOpenIcon = (props: InputProps) => {
  const { icon, onClick } = props;
  return (
    <>
      {icon ? (
        <InputIcon onClick={onClick}>
          <Icon icon={icon} />
        </InputIcon>
      ) : null}
    </>
  );
};
