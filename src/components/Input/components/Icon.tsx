import styled from 'styled-components';

interface InputIconProps {
  icon: React.FC;
}

export const Icon = ({ icon }: InputIconProps) => {
  const Icon = styled(icon)`
    height: 15px;
    width: 15px;
    color: gray;
  `;
  return <Icon />;
};
