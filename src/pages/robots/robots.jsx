// MUI
import { Grid } from '@mui/material';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import RobotsListTable from '../../components/pages/robots/robots-list-table/robots-list-table';
import DetailsTable from '../../components/pages/robots/details-table/details-table';
import RobotsChart from '../../components/pages/robots/robots-chart/robots-chart';

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
      <div className="mt-4">
        <CardWrapper>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          reprehenderit, temporibus dolorum illum quae officiis? Itaque
          aspernatur expedita voluptatem exercitationem, harum saepe quisquam
          dolor maiores reprehenderit quasi fuga nam facere!
        </CardWrapper>
      </div>
    </div>
  );
}

export default Robots;
