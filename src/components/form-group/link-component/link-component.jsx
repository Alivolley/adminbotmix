// Assets
import { LinkComponentStyle } from './link-component.style';

function LinkComponent({ children, className, color, onClick }) {
  return (
    <LinkComponentStyle onClick={onClick}>
      <p
        className={`text-white ${
          color === 'gray'
            ? 'bg-gradientBtnGray dark:bg-gradientBtnGrayDark'
            : 'bg-gradientBtnPurple'
        } ${className}`}
      >
        {children}
      </p>
    </LinkComponentStyle>
  );
}

export default LinkComponent;
