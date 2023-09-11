// MUI
import { Grid } from '@mui/material';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import AccordionComponent from '../../components/pages/api-keys/accordion-component/accordion-component';
import AddApiForm from '../../components/pages/api-keys/add-api-form/add-api-form';

function ApiKeys() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
          <CardWrapper>
            <div className="space-y-5">
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
            </div>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <CardWrapper>
            <AddApiForm />
          </CardWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApiKeys;
