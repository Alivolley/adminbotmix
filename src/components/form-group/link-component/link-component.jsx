// Assets
import { LinkComponentStyle } from './link-component.style';

function LinkComponent({ children, className, color }) {
  return (
    <LinkComponentStyle>
      <p
        className={`${
          color === 'gray'
            ? 'bg-gradientBtnGray text-black dark:text-white'
            : 'bg-gradientBtnPurple text-white'
        } ${className}`}
      >
        {children}
      </p>
    </LinkComponentStyle>
  );
}

export default LinkComponent;
