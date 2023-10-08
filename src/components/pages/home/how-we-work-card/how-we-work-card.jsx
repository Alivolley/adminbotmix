// Components
import { HowWeWorkCardStyle } from './how-we-work-card.style';

function HowWeWorkCard({ children, imageSrc, step }) {
   return (
      <HowWeWorkCardStyle>
         <p
            className="absolute right-8 top-[-19px] rounded-[100px] border-[1px] border-solid
       border-gray-300 bg-[#00ffff12] px-4 py-2 text-[13px] font-bold dark:border-gray-600"
         >
            {step}
         </p>

         <div className="flex items-start gap-4">
            <img src={imageSrc} alt={step} className="h-10 w-10" />
            <div className="space-y-4 border-r-[1px] border-solid border-gray-300 pr-5 dark:border-gray-600">
               <p className="text-[0.85rem] leading-6">{children}</p>
            </div>
         </div>
      </HowWeWorkCardStyle>
   );
}

export default HowWeWorkCard;
