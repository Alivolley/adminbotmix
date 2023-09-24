// Components
import { HowWeWorkCardStyle } from './how-we-work-card.style';

function HowWeWorkCard({ children, imageSrc, step, title }) {
  return (
    <HowWeWorkCardStyle>
      <p
        className="absolute right-8 top-[-19px] rounded-[100px] border-[1px] border-solid
       border-gray-300 px-4 py-2 text-[13px] font-bold text-violet-600 dark:border-gray-800"
        id="linear-text"
      >
        {step}
      </p>

      <div className="flex items-start gap-4">
        <img src={imageSrc} alt={title} className="h-10 w-10" />
        <div className="space-y-4 border-r-[1px] border-solid border-gray-300 pr-5 dark:border-gray-800">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm leading-6">{children}</p>
        </div>
      </div>
    </HowWeWorkCardStyle>
  );
}

export default HowWeWorkCard;
