import { BenefitsOfUsCardStyle } from './benefits-of-us-card.style';

function BenefitsOfUsCard({ children, step, pingSide = 'left' }) {
   return (
      <BenefitsOfUsCardStyle className="border border-gray-300 dark:border-gray-600">
         <p
            className="absolute right-8 top-[-19px] rounded-[100px] border-[1px] border-solid
       border-gray-300 bg-[#00ffff12] px-4 py-2 text-[13px] font-bold dark:border-gray-600"
         >
            {step}
         </p>

         <div
            className={`absolute top-[50%] h-[1px] w-[30px] bg-gray-300 dark:bg-gray-600 ${
               pingSide === 'left' ? 'left-[-30px]' : 'left-[-30px] customMd:right-[-30px]'
            }`}
         >
            <div
               className={`absolute top-[-6px] h-3 w-3 rounded-full bg-primaryBlue ${
                  pingSide === 'left' ? 'left-[-6px]' : 'left-[-6px] customMd:right-[-6px]'
               }`}
            >
               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primaryBlue opacity-75" />
            </div>
         </div>

         <div className="flex min-h-[100px] items-center gap-4">
            <p className="text-sm leading-6">{children}</p>
         </div>
      </BenefitsOfUsCardStyle>
   );
}

export default BenefitsOfUsCard;
