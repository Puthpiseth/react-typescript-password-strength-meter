import { TextGray } from '../../UI/Text/TextGray';
import { TextGreen } from '../../UI/Text/TextGreen';

interface PasswordStrengthIndicatorItemProps {
  isValid: boolean | undefined | null;
  text: string;
}

const PasswordStrengthIndicatorItem = ({ isValid, text }: PasswordStrengthIndicatorItemProps) => {
  return <>{isValid ? <TextGreen>{text}</TextGreen> : <TextGray>{text}</TextGray>}</>;
};

export default PasswordStrengthIndicatorItem;
