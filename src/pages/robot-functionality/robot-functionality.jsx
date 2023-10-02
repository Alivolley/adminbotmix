// MUI
import { Button, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import DetailsTable from '../../components/pages/robots/details-table/details-table';
import RobotsChart from '../../components/pages/robots/robots-chart/robots-chart';
import RobotsTable from '../../components/pages/robots/robots-table/robots-table';

function RobotFunctionality() {
  return (
    <div className="mx-auto mb-32 mt-14 max-w-[1150px] customMd:mt-[80px]">
      <div className="mb-7 flex items-center gap-7 border-b border-gray-300 pb-7 dark:border-gray-600">
        <p className="text-xl font-bold">نام ربات</p>
        <Button className="!font-vazir" variant="contained" color="primaryBlue">
          فعالسازی
        </Button>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} order={{ xs: 1, lg: 2 }}>
          <CardWrapper>
            <RobotsChart />
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={4} order={{ xs: 3, lg: 3 }}>
          <CardWrapper>
            <DetailsTable />
          </CardWrapper>
        </Grid>
      </Grid>
      <div className="mt-10">
        <CardWrapper>
          <p className="mb-[40px] text-sm font-bold">جدول آمارها</p>
          <RobotsTable />
          <div className="mt-6 flex items-center justify-center">
            <LoadingButton
              loading={false}
              variant="contained"
              className="!font-vazir disabled:!bg-textGray"
              color="primaryBlue"
            >
              بیشتر
            </LoadingButton>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}

export default RobotFunctionality;
