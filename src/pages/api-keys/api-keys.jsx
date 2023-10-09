// MUI
import { CircularProgress, Grid } from '@mui/material';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import AccordionComponent from '../../components/pages/api-keys/accordion-component/accordion-component';
import AddApiForm from '../../components/pages/api-keys/add-api-form/add-api-form';

// Apis
import useApiKeys from '../../apis/useApiKeys/useApiKeys';

function ApiKeys() {
   const { data: apiKeysData, isLoading: apiKeysIsLoading } = useApiKeys();

   return (
      <div>
         <Grid container spacing={2}>
            <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
               <CardWrapper>
                  {apiKeysIsLoading ? (
                     <div className="flex items-center justify-center">
                        <CircularProgress />
                     </div>
                  ) : (
                     <div className="space-y-5">
                        {apiKeysData?.keys?.map(item => (
                           <AccordionComponent key={item?.id} detail={item} />
                        ))}
                     </div>
                  )}
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
