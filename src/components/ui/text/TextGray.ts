import styled from 'styled-components';

export const TextGray = styled.p`
  font-size: 12px;
  color: #666464;

  &::before {
    content: 'X';
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;
