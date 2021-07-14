import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.6s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.8s;

  :hover {
    opacity: 0.8;
    box-shadow: 3px 4px 8px 1px rgba(0,0,0,0.3);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
