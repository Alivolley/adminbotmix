// Assets
import { TutorialCardStyle } from './tutorial-card.style';

function TutorialCard({ detail }) {
   return (
      <TutorialCardStyle to={`/tutorial/${detail?.id}`} className="block" id="image_wrapper">
         <img src={detail?.cover} alt="tutorial cover" className="aspect-square w-full object-cover" />
         <p id="title" className="text-xs customMd:text-sm">
            {detail?.title}
         </p>
      </TutorialCardStyle>
   );
}

export default TutorialCard;
