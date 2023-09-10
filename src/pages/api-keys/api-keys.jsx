// MUI
import { Grid } from '@mui/material';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import AccordionComponent from '../../components/pages/api-keys/accordion-component/accordion-component';

function ApiKeys() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
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
        <Grid item xs={12} md={5}>
          <CardWrapper>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim iusto
            aliquid qui quasi perspiciatis, ex ipsam deserunt sit inventore
            voluptatum magnam eos, officiis, culpa quaerat eaque maxime facilis
            nostrum omnis!
          </CardWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ApiKeys;
