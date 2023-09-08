// Components
import CardWrapper from '../../../templates/card-wrapper/card-wrapper';

function InfoCard({ children, icon, progress }) {
  return (
    <CardWrapper>
      <div className="flex items-start justify-between text-textMain transition-colors duration-200 dark:text-textMainDark">
        <div>{children}</div>

        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primaryBlue text-[22px] text-white">
            {icon}
          </div>
        ) : null}

        {progress ? (
          <div className="flex h-12 w-12 items-center justify-center">
            {progress}
          </div>
        ) : null}
      </div>
    </CardWrapper>
  );
}

export default InfoCard;
