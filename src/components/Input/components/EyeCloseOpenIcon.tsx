import { IconLayout, InputIcon } from '../styles/Input.style';
import { Icon } from './Icon';

interface InputProps {
  icon?: React.FC;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const EyeCloseOpenIcon = (props: InputProps) => {
  const { icon, onClick } = props;
  return (
    <IconLayout>
      {icon ? (
        <InputIcon onClick={onClick}>
          <Icon icon={icon} />
        </InputIcon>
      ) : null}
    </IconLayout>
  );
};
