import { Link } from 'react-router-dom';
// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

function SuggestArticleCard({ imageSrc }) {
  return (
    <Link
      to="/article/2"
      className="mb-5 flex gap-4 border-b border-gray-300 pb-5 dark:border-gray-600"
    >
      <img
        src={imageSrc}
        alt="suggested article"
        className="h-20 w-20 rounded-md"
      />
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-textGray customSm:text-xs">
          <InsertInvitationIcon sx={{ fontSize: '15px' }} />
          <p>اردیبهشت ۱۴۰۰/۴</p>
        </div>

        <p
          className="h-12 overflow-hidden text-xs !leading-6 customSm:text-sm"
          id="text"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با ستون و
          سطرآنچنان که لازم است.
        </p>
      </div>
    </Link>
  );
}

export default SuggestArticleCard;
