import styled from 'styled-components';
import { Icon } from './Icon';

const InputIcon = styled.button`
  width: 5%;
  position: relative;
  bottom: 29%;
  left: 91%;
  padding: 0;
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
