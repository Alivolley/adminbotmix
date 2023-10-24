import { useLocation } from 'react-router-dom';
import { useState } from 'react';

// MUI
import { CircularProgress, Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

// Components
import CardWrapper from '../../components/templates/card-wrapper/card-wrapper';
import RobotsListTable from '../../components/pages/robots/robots-list-table/robots-list-table';
import DetailsTable from '../../components/pages/robots/details-table/details-table';
import RobotsChart from '../../components/pages/robots/robots-chart/robots-chart';
import RobotsTable from '../../components/pages/robots/robots-table/robots-table';

// Apis
import useRobotsList from '../../apis/robots/useRobotsList/useRobotsList';
import useSpecificRobot from '../../apis/robots/useSpecificRobot/useSpecificRobot';
import useRobotsTable from '../../apis/robots/useRobotsTable/useRobotsTable';

function Robots() {
   const location = useLocation();
   const [robotId, setRobotId] = useState(location.state || 'default');

   const { data: robotsListData, isLoading: robotsListIsLoading } = useRobotsList();
   const {
      data: robotsSpecificData,
      isLoading: robotsSpecificIsLoading,
      refetch: robotsSpecificRefetch,
   } = useSpecificRobot(robotId);
   const {
      data: robotsTableData,
      isLoading: robotsTableIsLoading,
      hasNextPage: robotsTableHasNextPage,
      isFetchingNextPage: robotsTableIsFetchingNextPage,
      fetchNextPage: robotsTableFetchNextPage,
      refetch: robotsTableRefetch,
   } = useRobotsTable(robotId);

   const refetchData = () => {
      robotsSpecificRefetch();
      robotsTableRefetch();
   };

   return (
      <div>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
               <div className="flex h-full flex-col gap-4">
                  <CardWrapper>
                     {robotsListIsLoading ? (
                        <div className="flex items-center justify-center">
                           <CircularProgress />
                        </div>
                     ) : (
                        <RobotsListTable detail={robotsListData} setRobotId={setRobotId} robotId={robotId} />
                     )}
                  </CardWrapper>

                  <CardWrapper className="flex h-full items-center justify-center">
                     {robotsSpecificIsLoading ? (
                        <div className="flex items-center justify-center">
                           <CircularProgress />
                        </div>
                     ) : (
                        <div className="w-full">
                           {robotsSpecificData?.chart?.length && <RobotsChart detail={robotsSpecificData?.chart} />}
                        </div>
                     )}
                  </CardWrapper>
               </div>
            </Grid>
            <Grid item xs={12} lg={4}>
               <CardWrapper heightFull>
                  {robotsSpecificIsLoading ? (
                     <div className="flex items-center justify-center">
                        <CircularProgress />
                     </div>
                  ) : (
                     <DetailsTable detail={robotsSpecificData} setRobotId={setRobotId} />
                  )}
               </CardWrapper>
            </Grid>
         </Grid>
         <div className="mt-10">
            <CardWrapper>
               <p className="mb-[40px] text-sm font-bold">جدول آمارها</p>
               {robotsTableIsLoading ? (
                  <div className="flex items-center justify-center">
                     <CircularProgress />
                  </div>
               ) : (
                  <>
                     <RobotsTable
                        detail={robotsTableData?.pages?.flatMap(page => page?.data?.map(item => item))}
                        refetchData={refetchData}
                        hasMoreDetail
                     />
                     {robotsTableHasNextPage && (
                        <div className="mt-6 flex items-center justify-center">
                           <LoadingButton
                              loading={robotsTableIsFetchingNextPage}
                              variant="contained"
                              className="!font-vazir disabled:!bg-textGray"
                              color="primaryBlue"
                              onClick={robotsTableFetchNextPage}
                           >
                              بیشتر
                           </LoadingButton>
                        </div>
                     )}
                  </>
               )}
            </CardWrapper>
         </div>
      </div>
   );
}

export default Robots;
