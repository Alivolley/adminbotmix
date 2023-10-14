/* eslint-disable react/no-danger */
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

// MUI
import { CircularProgress, Grid } from '@mui/material';

// Icon
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

// Assets
import { ChosenTutorialStyle } from './chosen-tutorial.style';

// Components
import TutorialCard from '../../components/templates/tutorial-card/tutorial-card';
import LinkComponent from '../../components/form-group/link-component/link-component';

// Apis
import useTutorials from '../../apis/tutorials/useTutorials/useTutorials';
import useTutorialDetail from '../../apis/tutorials/useTutorialDetail/useTutorialDetail';

function ChosenTutorial() {
   const { id } = useParams();

   const { data: tutorialDetail, isLoading: tutorialIsLoading } = useTutorialDetail(id);
   const { data: tutorialsData, isLoading: tutorialsIsLoading } = useTutorials(1);

   return (
      <ChosenTutorialStyle className="min-h-screen">
         {tutorialIsLoading ? (
            <div className="flex items-center justify-center">
               <CircularProgress />
            </div>
         ) : (
            <div className="mx-auto mb-36 mt-14 max-w-[1150px] customMd:mt-[140px]">
               <Grid container spacing={6}>
                  <Grid item xs={12} md={3.5} order={{ xs: 2, md: 1 }}>
                     <div className="mx-6 space-y-10 border-l border-gray-300 pl-5 dark:border-gray-600">
                        {tutorialsIsLoading ? (
                           <div className="flex items-center justify-center">
                              <CircularProgress />
                           </div>
                        ) : (
                           tutorialsData?.data?.map(
                              item =>
                                 Number(item?.id) !== Number(id) && (
                                    <div className="mx-auto max-w-sm" key={item?.id}>
                                       <TutorialCard detail={item} />
                                    </div>
                                 )
                           )
                        )}

                        <Link to="/tutorials" className="mt-16 flex justify-center">
                           <LinkComponent className="px-5">مشاهده همه آموزش ها</LinkComponent>
                        </Link>
                     </div>
                  </Grid>

                  <Grid item xs={12} md={8.5} order={{ xs: 1, md: 2 }}>
                     <div>
                        <h3 className="font-lalezar text-3xl customSm:text-6xl">{tutorialDetail?.title}</h3>
                        <div
                           className="my-5 flex items-center gap-2 border-b border-gray-300 pb-5 text-xs
               text-textGray dark:border-gray-600 customSm:text-sm"
                        >
                           <InsertInvitationIcon fontSize="small" />
                           <p>{tutorialDetail?.created_at}</p>
                        </div>

                        <div className="space-y-10 text-sm !leading-[30px] customSm:text-base">
                           <div className="aspect-[5/3] object-contain px-10">
                              <video
                                 controls
                                 alt="tutorial"
                                 className="h-full w-full"
                                 poster={tutorialDetail?.cover}
                                 preload="metadata"
                              >
                                 <source src={tutorialDetail?.play_link} />
                                 <track src="captions.vtt" kind="captions" label="English" />
                              </video>
                           </div>
                           <div className="space-y-10 text-sm leading-[30px] customSm:text-base">
                              <div dangerouslySetInnerHTML={{ __html: DOMPurify?.sanitize(tutorialDetail?.text) }} />
                           </div>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         )}
      </ChosenTutorialStyle>
   );
}

export default ChosenTutorial;
