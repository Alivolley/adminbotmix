import { BenefitsOfUsCardStyle } from './benefits-of-us-card.style';

function BenefitsOfUsCard({ children, step, title, pingSide = 'left' }) {
  return (
    <BenefitsOfUsCardStyle className="border border-gray-300 dark:border-gray-600">
      <p
        className="absolute right-8 top-[-19px] rounded-[100px] border-[1px] border-solid
       border-gray-300 px-4 py-2 text-[13px] font-bold dark:border-gray-600"
        id="linear-text"
      >
        {step}
      </p>

      <div
        className={`absolute top-[50%] h-[1px] w-[30px] bg-gray-300 dark:bg-gray-600 ${
          pingSide === 'left'
            ? 'left-[-30px]'
            : 'left-[-30px] customMd:right-[-30px]'
        }`}
      >
        <div
          className={`absolute top-[-6px] h-3 w-3 rounded-full bg-violet-500 ${
            pingSide === 'left'
              ? 'left-[-6px]'
              : 'left-[-6px] customMd:right-[-6px]'
          }`}
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
        </div>
      </div>

      <div className="flex min-h-[160px] items-start gap-4">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="mb-5 mt-2 h-[3px] w-14 rounded-sm bg-gradientBtnBlue" />
          <p className="text-sm leading-6">{children}</p>
        </div>
      </div>
    </BenefitsOfUsCardStyle>
  );
}

export default BenefitsOfUsCard;
