// Mui
import { Button } from '@mui/material';

// Icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function GroupCard() {
  return (
    <div className="rounded-xl bg-bgPrimary p-3 text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:p-5">
      <div className="flex items-center justify-end  gap-1 customSm:gap-2">
        <Button
          variant="outlined"
          className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
          size="small"
          color="error"
          endIcon={<DeleteOutlineIcon />}
        >
          حذف
        </Button>
      </div>
      <div className="mt-8 space-y-3 customSm:mt-3">
        <div className="mt-1 flex items-center gap-2 text-sm">
          <p className="font-bold text-textGray">نام گروه :</p>
          <p>هرج و مرج</p>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <p className="font-bold text-textGray">آیدی گروه :</p>
          <p>2687841</p>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
