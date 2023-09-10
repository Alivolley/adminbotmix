import { useRef, useState } from 'react';

// MUI
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import IconButton from '@mui/material/IconButton';

// Icons
import CableIcon from '@mui/icons-material/Cable';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function AccordionComponent() {
  const testArray = [1, 2, 3, 4, 5, 6];

  const [copyStatus, setCopyStatus] = useState({
    outerLink: false,
    innerLink: false,
  });

  const outerLinkRef = useRef();
  const innerLinkRef = useRef();

  const copyOuterLink = () => {
    navigator.clipboard.writeText(outerLinkRef.current.innerText).then(() => {
      setCopyStatus(prev => ({
        ...prev,
        outerLink: true,
      }));

      setTimeout(() => {
        setCopyStatus(prev => ({
          ...prev,
          outerLink: false,
        }));
      }, 2000);
    });
  };

  const copyInnerLink = () => {
    navigator.clipboard.writeText(innerLinkRef.current.innerHTML).then(() => {
      setCopyStatus(prev => ({
        ...prev,
        innerLink: true,
      }));
      setTimeout(() => {
        setCopyStatus(prev => ({
          ...prev,
          innerLink: false,
        }));
      }, 2000);
    });
  };

  return (
    <div className="rounded-xl bg-bgPrimary p-3 text-textMain dark:bg-bgPrimaryDark dark:text-textMainDark customSm:p-5">
      <div dir="rtl">
        <div className="flex flex-wrap items-center  gap-1 customSm:gap-2">
          <Button
            variant="outlined"
            className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
            size="small"
            endIcon={<CableIcon />}
          >
            اتصال
          </Button>
          <Button
            variant="outlined"
            className="gap-[2px] !p-[1px] !pr-2 !font-vazir customSm:gap-2"
            size="small"
            color="warning"
            endIcon={<DoDisturbOnOutlinedIcon />}
          >
            ابطال
          </Button>
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
        <div className="mt-8 customSm:mt-3" dir="ltr">
          <p>Binance</p>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">API KEY :</p>
            <p>2546879</p>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">API SECRET :</p>
            <p>2687841</p>
          </div>
          <div className="mt-1 flex items-center gap-2 text-[13px]">
            <p className="font-bold text-textGray">نوع :</p>
            <p>Future</p>
          </div>
        </div>

        <div
          dir="ltr"
          className="relative mr-auto mt-2 flex w-fit items-center rounded-md border-[1px] border-solid border-textGray text-[10px] customSm:text-xs"
        >
          <p
            className="border-r-[1px] border-solid border-textGray bg-bgSecondary px-2 py-[6px] dark:bg-bgSecondaryDark"
            ref={outerLinkRef}
          >
            jsfiuen54tgregt154er1g5esg5ds61
          </p>
          <IconButton className="text-sm !text-inherit" onClick={copyOuterLink}>
            <ContentCopyIcon className="!text-sm" />
          </IconButton>
          {copyStatus.outerLink ? (
            <div className="absolute inset-x-0 bottom-[-30px] z-[1] mx-auto w-fit whitespace-nowrap rounded-md bg-black p-[6px] text-[10px] text-textMainDark">
              کپی شد
            </div>
          ) : null}
        </div>
      </div>
      <Accordion
        className="!bg-inherit !text-inherit"
        sx={{
          boxShadow: '0px 5px 6px 1px rgba(0, 0, 0, 0.1)',
          '&.MuiAccordion-root:before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-textMainDark" />}
          dir="ltr"
          className=""
        />
        <AccordionDetails>
          <div className="space-y-2">
            {testArray?.map(item => (
              <Accordion
                key={item}
                className="!bg-inherit !text-inherit"
                sx={{
                  boxShadow: '0px 2px 5px 1px #4fd1c455',
                  '&.MuiAccordion-root:before': {
                    display: 'none',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className="dark:text-textMainDark" />
                  }
                  dir="ltr"
                  className=""
                >
                  firstItem
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div className="flex items-center">
                      <IconButton
                        className="!text-inherit"
                        onClick={copyInnerLink}
                      >
                        <ContentCopyIcon className="!text-base" />
                      </IconButton>
                      {copyStatus.innerLink ? (
                        <div className="rounded-md bg-black p-[6px] text-xs text-textMainDark">
                          کپی شد
                        </div>
                      ) : null}
                    </div>

                    <p
                      ref={innerLinkRef}
                      dir="ltr"
                      className="mt-2 max-h-[300px] overflow-auto text-sm"
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quibusdam, at. Laudantium velit doloribus omnis dolorem,
                      beatae illum quos optio dignissimos, maiores
                      exercitationem iusto! Similique nisi cupiditate temporibus
                      optio, fuga animi ducimus sapiente voluptatum modi libero
                      porro dolor commodi laboriosam culpa, incidunt,
                      consequuntur a reiciendis eius magnam sunt laudantium
                      assumenda. Sequi doloremque est animi necessitatibus.
                      Libero explicabo blanditiis quos obcaecati placeat ex ea
                      fuga incidunt quod facere, asperiores corrupti dicta nulla
                      saepe! Sed ad doloremque sit exercitationem repellat
                      distinctio at, culpa hic ullam voluptate et quas mollitia?
                      Placeat tempora nobis, natus magni qui delectus deleniti
                      voluptate perferendis eum! Ea exercitationem quaerat aut,
                      dolorum voluptatum itaque dicta maiores porro facere
                      possimus ut magnam laboriosam debitis adipisci doloremque
                      nihil eaque, voluptatibus aliquid tempore odit rerum
                      obcaecati accusamus placeat? Itaque doloribus est a,
                      libero, suscipit voluptate voluptas quam cupiditate ex sit
                      natus, dolor illum quos? Ipsam, exercitationem id
                      recusandae illo voluptatem vitae explicabo animi placeat
                      voluptates fuga eos earum tempore suscipit adipisci
                      inventore amet pariatur quaerat atque eius totam
                      consequuntur ab soluta dicta. Cum, inventore! Sunt tempora
                      asperiores ex veniam vero maxime tenetur ab porro. Eum
                      dolore numquam rem assumenda adipisci aliquid magni, autem
                      ad quidem debitis tempore minima eligendi, sint ullam
                      illum necessitatibus quo in saepe? Ullam, laboriosam ab!
                      Eum reprehenderit, recusandae consectetur doloribus iste
                      qui a enim? Laboriosam deleniti doloribus rem quaerat
                      explicabo minus ex incidunt! Velit laudantium neque
                      dolorum, eaque, quisquam id assumenda vitae in suscipit ab
                      perspiciatis laborum aperiam ducimus cum sapiente. Soluta
                      impedit aspernatur voluptatum, sed sit voluptatem
                      consequuntur et molestias magni ad alias fuga cumque
                      placeat quae minima est rem tenetur. Itaque ullam beatae
                      ea tempora cum atque dolore, excepturi assumenda
                      voluptatem odio aspernatur officia expedita debitis eum
                      explicabo perferendis suscipit, sunt laudantium aut
                      reiciendis delectus eveniet! Iure, iusto illum. Animi, at?
                      Impedit ex rem quidem porro qui placeat quaerat excepturi
                      modi quos, similique molestias fugit dolore? Quo, tenetur
                      laborum ad quaerat consequatur nesciunt dignissimos. Rem
                      nisi earum at voluptate veritatis ad omnis accusantium
                      dolore quos adipisci aspernatur harum eum repellendus
                      porro doloribus totam, a possimus ab tenetur tempora
                      officia nostrum, quam beatae. Totam, rerum? Beatae maiores
                      totam nulla veritatis assumenda veniam minus cupiditate
                      eveniet nihil autem doloribus culpa ab rerum obcaecati
                      ducimus ea, recusandae vel! Non perferendis maiores
                      distinctio ipsa pariatur obcaecati exercitationem, vel
                      quidem delectus cumque nemo consequatur quisquam
                      similique, quaerat suscipit. Maiores qui repellat,
                      officiis libero perspiciatis quia minima velit pariatur
                      doloremque nulla atque ut sunt deleniti voluptatibus
                      explicabo, assumenda earum. Quo, perspiciatis eius
                      dignissimos laborum sint, veritatis sapiente at beatae
                      dolor nihil libero amet pariatur necessitatibus? Aut
                      inventore saepe, molestiae ullam ipsa sequi unde? Nostrum
                      sequi non aperiam. Corrupti maiores numquam odit,
                      voluptate quasi quaerat, atque nam alias eligendi minus
                      adipisci nesciunt quisquam non exercitationem deserunt
                      reprehenderit molestias in quidem deleniti nihil culpa
                      praesentium sapiente at impedit. Ipsam quia natus sit
                      quaerat veritatis saepe excepturi assumenda optio,
                      officiis non, totam consequatur neque odit inventore est
                      exercitationem, facere minima reprehenderit quidem quas!
                      Aspernatur totam blanditiis laboriosam animi id unde odio
                      harum quibusdam facilis, inventore, ducimus fugit
                      molestias quis rem repellendus laudantium minus autem
                      beatae aut tenetur at necessitatibus ipsam. Inventore hic
                      fugiat iusto dignissimos ab facilis pariatur quaerat
                      eligendi, obcaecati autem ea perferendis sapiente deleniti
                      qui corporis voluptatibus accusamus mollitia labore natus
                      aut totam recusandae, dolorem consectetur ipsum? Sunt
                      nulla adipisci minus ratione non quasi iste sequi, enim
                      repellendus! Reprehenderit quae quaerat rem aut maxime
                      iusto placeat alias maiores perspiciatis, minima labore
                      eum quo repellat, officia dolores minus ratione nesciunt
                      similique eius! Dolore autem ducimus repellendus debitis
                      ex magnam nulla odit enim, cumque iure deleniti esse modi
                      animi pariatur ad minima tempore repellat in rem eos
                      architecto possimus non? Neque ut impedit amet beatae. Aut
                      facilis eaque officia adipisci impedit alias sunt aperiam
                      officiis reprehenderit optio in id modi doloribus tenetur
                      voluptas qui quisquam, enim odit porro! Fuga esse dolor
                      quo ab nostrum debitis, iusto magnam quis quas
                      reprehenderit quidem animi at adipisci vitae voluptates ad
                      possimus perspiciatis mollitia nihil fugit rerum!
                      Molestiae iste veritatis animi, qui architecto odit
                      dolorum, aliquid atque fuga perferendis deleniti!
                      Excepturi corrupti incidunt laborum reiciendis dolor
                      deserunt, explicabo, sequi maxime provident et qui debitis
                      totam suscipit quod iste fugiat nisi officia quis nam eos
                      perferendis. Pariatur provident dolore necessitatibus
                      dolor est eveniet vero possimus? Nemo asperiores tenetur
                      autem aliquid fuga? Necessitatibus tempora ex in dicta
                      voluptatum obcaecati sunt repudiandae excepturi asperiores
                      porro omnis vero quidem nam, delectus quo consequuntur
                      autem a voluptates quae laudantium maiores iure? Porro
                      sint modi ratione reprehenderit fugit similique a ullam
                      itaque consequuntur illo quam alias nesciunt voluptas
                      numquam temporibus mollitia ad, quibusdam quis placeat
                      distinctio ex assumenda corrupti? Culpa sed nemo aut
                      ipsum, tempore eveniet, provident dignissimos incidunt
                      quidem ea iste blanditiis laudantium voluptate quod harum
                      eaque rem. Iste, mollitia, a temporibus laboriosam
                      adipisci eaque ut corporis, tempore voluptatum distinctio
                      in facilis blanditiis. Nisi, aperiam?
                    </p>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
