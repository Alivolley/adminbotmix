import { Link } from 'react-router-dom';
// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

function SuggestArticleCard({ detail }) {
   return (
      <Link
         to={`/article/${detail?.articleID}`}
         className="mb-5 flex gap-4 border-b border-gray-300 pb-5 dark:border-gray-600"
      >
         <img src={detail?.cover} alt="suggested article" className="h-20 w-20 rounded-md object-cover" />
         <div className="space-y-2">
            <div className="flex items-center gap-2 text-[10px] text-textGray customSm:text-xs">
               <InsertInvitationIcon sx={{ fontSize: '15px' }} />
               <p>{detail?.created_at}</p>
            </div>

            <p className="h-12 overflow-hidden text-xs !leading-6 customSm:text-sm" id="text">
               {detail?.title}
            </p>
         </div>
      </Link>
   );
}

export default SuggestArticleCard;
