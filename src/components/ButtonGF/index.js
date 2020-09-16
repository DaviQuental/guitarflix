import styled from "styled-components";

const ButtonGF = styled.button`
  padding: 18rem 40rem;
  font-weight: 400;
  font-size: 13rem;
  background-color: var(--dark-color);
  border: 1rem solid var(--primary-medium-color);
  border-radius: 5rem;
  color: var(--light-color);
  transition: background-color 200ms linear,
    transform 200ms cubic-bezier(0, 0, 0.48, 2.2);

  &:hover {
    background-color: var(--primary-medium-color);
    transform: scale(1.1);
    cursor: pointer;
  }

  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.95);
  }
`;

export default ButtonGF;
