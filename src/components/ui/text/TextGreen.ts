import styled from 'styled-components';

export const TextGreen = styled.p`
  font-size: 12px;
  color: #07882b;

  &::before {
    content: '✓';
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
