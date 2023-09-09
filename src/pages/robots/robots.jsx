// MUI
import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import RobotsListTable from '../../components/pages/robots/robots-list-table/robots-list-table';
import DetailsTable from '../../components/pages/robots/details-table/details-table';
import RobotsChart from '../../components/pages/robots/robots-chart/robots-chart';
import RobotsTable from '../../components/pages/robots/robots-table/robots-table';

function Robots() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3} order={{ xs: 2, lg: 1 }}>
          <CardWrapper>
            <RobotsListTable />
          </CardWrapper>
        </Grid>
        <Grid item xs={12} lg={5.5} order={{ xs: 1, lg: 2 }}>
          <CardWrapper>
            <RobotsChart />
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={6} lg={3.5} order={{ xs: 3, lg: 3 }}>
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
            >
              بیشتر
            </LoadingButton>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}

export default Robots;
