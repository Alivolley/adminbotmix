// Assets
import { TutorialCardStyle } from './tutorial-card.style';

function TutorialCard({ imageSrc }) {
  return (
    <TutorialCardStyle to="/" className="block" id="image_wrapper">
      <img
        src={imageSrc}
        alt="tutorial cover"
        className="aspect-square w-full"
      />
      <p id="title">آموزش اتصال به صرافی</p>
    </TutorialCardStyle>
  );
}

export default TutorialCard;
