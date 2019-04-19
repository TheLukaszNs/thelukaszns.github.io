import styled, { css } from 'styled-components';

type ButtonProps = {
  buttonType: 'raised' | 'outlined';
};

const Button = styled.button<ButtonProps>`
  font-size: inherit;
  outline: none;
  border: none;
  padding: 10px 25px;
  cursor: pointer;
  transition: all 0.25s;

  ${({ buttonType }) =>
    buttonType === 'raised'
      ? css`
          background: linear-gradient(90deg, #eb5757 0%, #f2994a 100%);
          color: #fff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

          &:hover {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
          }
        `
      : css`
          background: none;
          border: 1px solid #f2994a;
          color: #f2994a;
          &:hover {
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          }
        `};
`;

export default Button;
