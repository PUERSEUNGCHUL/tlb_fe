import { Avatar } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import GradeIcon from '@mui/icons-material/Grade';

const LabyrinthCard = () => {
  return (
    <div className='w-44 h-64 bg-white rounded-md p-1'>
        <div className='flex flex-row items-center cursor-pointer'>
            <Avatar 
                alt="제작자 아이콘" 
                src="https://www.thelabyrinth.co.kr/labyrinth/upload/icon/1642125048452/puer-icon-c.gif" 
                sx={{ width: 35, height: 35 }}
            />
            <div>
                <p className='font-bold'>푸에르</p>
                <p className="text-gray-500 text-xs">일곱개의 대양의 항해사</p>
            </div>
        </div>
        <div className='pt-1'>
            <img src="https://www.thelabyrinth.co.kr/labyrinth/com/getImage.do?fileId=46409&labyrinthSeqn=5016"/>
        </div>
        <div>
            <p>
            논리.<br/>
            "당신 앞에 오래된 컴퓨터 하나가 켜져 있다."<br/>
            (본 미궁은 컴퓨터로 플레이하는 것을 권장합니다.)<br/>
            </p>
        </div>
        <div className='flex flex-row items-center justify-between pt-1'>
            <PlayArrowIcon/>
            <ContentPasteSearchIcon/>
            <ThumbUpOffAltIcon/>
            <GradeIcon/>
        </div>
    </div>
  )
}

export default LabyrinthCard