// Assets
import { LinkComponentStyle } from './link-component.style';

function LinkComponent({ children, className, color, onClick }) {
  return (
    <LinkComponentStyle onClick={onClick}>
      <p
        className={`text-white ${
          color === 'gray'
            ? 'bg-gradientBtnGreen text-black dark:text-white'
            : 'bg-gradientBtnBlue text-black dark:text-white'
        } ${className}`}
      >
        {children}
      </p>
    </LinkComponentStyle>
  );
}

export default LinkComponent;
