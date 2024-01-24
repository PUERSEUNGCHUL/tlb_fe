  'use client';
  import laxios from '@/app/fetch/labyAxios';
  import './Quest.css';
  import axios from 'axios';
  import { usePathname, useRouter } from 'next/navigation';
  import React, { useEffect, useState } from 'react'
  import TextField from '@mui/material/TextField';
  import Box from '@mui/material/Box';
  import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip } from '@mui/material';
  import SendIcon from '@mui/icons-material/Send';
  import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
  import { SosOutlined } from '@mui/icons-material';
  import UndoIcon from '@mui/icons-material/Undo';
  import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
  import Script from 'next/script';

  let goNextPage; // goNextPage 함수를 컴포넌트 바깥에서 선언
  const a = 1234;

  const QuestPage = (props: any) => {

    const [questData, setQuestData] = useState({});

    const pathname = usePathname();

    const [pathVar, setPathVar] = useState({
      "checkResult" : false,
      "labyirnthId" : -1,
      "questId" : -1
    })

    const checkURL = (pathname:string):boolean => {
      
      const regex = /^\/labyrinth\/play\/(\d+)\/(\d+)$/;

      const match = pathname.match(regex);
      

      if (match) {
        const labyrinthId = parseInt(match[1], 10); // match[1]에 labyrinthId가 있습니다.
        const questId = parseInt(match[2], 10); // match[2]에 questId가 있습니다.

        setPathVar({
          "checkResult" : true,
          "labyirnthId" : labyrinthId,
          "questId" : questId
        })

        return true;

      } else {
        setPathVar({
          "checkResult" : false,
          "labyirnthId" : 0,
          "questId" : 0
        })
        console.log("URL does not match the expected pattern.");
        return false;
      }
    }

    const fectQuestData = async () =>  {


      const questData = await laxios.get(`/labyrinth/${pathVar.labyirnthId}/quest/${pathVar.questId || ''}`);

      return questData;
    }

    

    useEffect(() => {
      // goNextPage 함수 정의
      goNextPage = (page: string) => {
        console.log(`Navigating to page ${page}`);
        // 페이지 네비게이션 또는 기타 로직 수행
      };
    }, []);

    useEffect(() => {
      checkURL(pathname);
      if (pathVar.checkResult) {
        fectQuestData().then(questData => {
          return setQuestData(questData);
        });
      } else {
        console.log("access error")
      }
    },[pathVar.checkResult])


    const [answerDialogOpen, setAnswerDialogOpen] = React.useState(false);
    const [hintDialogOpen, setHintDialogOpen] = React.useState(false);
    const [questHintDialogOpen, setQuestHintDialogOpen] = React.useState(false);

    const handleAnswerDialogOpen = () => {
      setAnswerDialogOpen(true);
    };

    const handleAnswerDialogClose = () => {
      setAnswerDialogOpen(false);
    };

    const handleHintDialogOpen = () => {
      setHintDialogOpen(true);
    };

    const handleHintDialogClose = () => {
      setHintDialogOpen(false);
    };

    const handleHintAgree = () => {
      handleHintDialogClose();
      handleQuestHintOpen()
    }

    const handleQuestHintOpen = () => {
      setQuestHintDialogOpen(true);
    };

    const handleQuestHintClose = () => {
      setQuestHintDialogOpen(false);
    }


    return (
      <>
        <Script src='/Quest.js'/>
        <div className='pb-10' style={{
          backgroundColor : questData?.data?.responseData?.backgroundHexCode
        }}>
          <div dangerouslySetInnerHTML={{ __html: questData?.data?.responseData?.quest || '' }} />
        </div>
        <footer className='h-16 flex flex-row justify-between items-center answer_area'>
          <div>
            <PlayArrowRoundedIcon className='rotate-180'/>
          </div>
          <div>
            <Tooltip title="정답은 영대문자/소문자를 구분하지 않습니다.">
              <HelpOutlineIcon/>
            </Tooltip>
            <TextField
              label="정답을 입력해주세요."
              
            />
            <Button className='ml-1 h-14' variant="outlined" endIcon={<SendIcon />} onClick={handleAnswerDialogOpen}>
              정답
            </Button>

            <Button className='ml-1 h-14' color='secondary' variant="outlined" endIcon={<SosOutlined />} onClick={handleHintDialogOpen}>
              힌트
            </Button>
          </div>
          <div>
            <PlayArrowRoundedIcon/>
          </div>
        </footer>

        <>
          <Dialog
            open={answerDialogOpen}
            onClose={handleAnswerDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">
            {"정답이 아닙니다."}
          </DialogTitle>
        </Dialog>

        
        <Dialog
          open={hintDialogOpen}
          onClose={handleHintDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"힌트를 사용하시겠습니까?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            힌트는 %3포인트를 사용하여 열람합니다. 포인트사용 후 재열람 가능합니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHintDialogClose}>안 볼래요</Button>
            <Button onClick={handleHintAgree} autoFocus>
              볼께요
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={questHintDialogOpen}
          onClose={handleQuestHintClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"힌트 보기"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>
                아이고
                <br/>
                어익후
              </p>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        
      </>
      </>
    )
  }

  export default QuestPage;