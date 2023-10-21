import { useParams } from 'react-router-dom';

// MUI
import { CircularProgress, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import DetailTableRobotFunctionality from '../../components/pages/robot-functionality/detail-table-robot-functionality/detail-table-robot-functionality';
import RobotsChart from '../../components/pages/robots/robots-chart/robots-chart';
import RobotsTable from '../../components/pages/robots/robots-table/robots-table';

// Apis
import useRobotDetail from '../../apis/robot-functionallity/useRobotDetail/useRobotDetail';

function RobotFunctionality() {
   const { id } = useParams();

   const {
      data: robotData,
      isLoading: robotIsLoading,
      hasNextPage,
      fetchNextPage,
      isFetchingNextPage,
      refetch,
   } = useRobotDetail(id);

   console.log(robotData?.pages);
   return (
      <div className="mx-auto mb-32 mt-14 min-h-screen max-w-[1150px] customMd:mt-[80px]">
         {robotIsLoading ? (
            <div className="flex items-center justify-center">
               <CircularProgress />
            </div>
         ) : (
            <>
               <Grid container spacing={2}>
                  <Grid item xs={12} md={8} order={{ xs: 1, lg: 2 }}>
                     <CardWrapper heightFull>
                        <RobotsChart detail={robotData?.pages?.[0]?.data?.chart} />
                     </CardWrapper>
                  </Grid>
                  <Grid item xs={12} md={4} order={{ xs: 3, lg: 3 }}>
                     <CardWrapper heightFull>
                        <DetailTableRobotFunctionality
                           detail={robotData?.pages?.[0]?.data}
                           accountBalance={robotData?.pages?.[0]?.account_balance}
                        />
                     </CardWrapper>
                  </Grid>
               </Grid>
               <div className="mt-10">
                  <CardWrapper>
                     <p className="mb-[40px] text-sm font-bold">جدول آمارها</p>
                     <RobotsTable
                        detail={robotData?.pages?.flatMap(page => page?.data?.table?.map(item => item))}
                        refetchData={refetch}
                     />

                     {hasNextPage && (
                        <div className="mt-6 flex items-center justify-center">
                           <LoadingButton
                              loading={isFetchingNextPage}
                              variant="contained"
                              className="!font-vazir disabled:!bg-textGray"
                              color="primaryBlue"
                              onClick={fetchNextPage}
                           >
                              بیشتر
                           </LoadingButton>
                        </div>
                     )}
                  </CardWrapper>
               </div>
            </>
         )}
      </div>
   );
}

export default RobotFunctionality;
