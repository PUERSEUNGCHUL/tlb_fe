import { Avatar } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import GradeIcon from '@mui/icons-material/Grade';
import { LabyrinthData } from '../../vo/Labyrinth'

import './LabyrinthCard.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LabyrinthCard = (props : {labyrinthData : LabyrinthData}) => {

  const router = useRouter();

  const labyrinthData = props.labyrinthData;
    return (
      <div className='w-44 h-60 bg-white rounded-md p-1'>
        <div className='flex flex-row items-center cursor-pointer'>
          <Avatar
            alt="제작자 아이콘"
            src={labyrinthData.createUserInfo?.profileImagePath} // Use the appropriate property from labyrinthData
            sx={{ width: 35, height: 35 }}
          />
          <div>
            <p className='font-bold'>{labyrinthData.createUserInfo?.nickname}</p>
            <p className="text-gray-500 text-xs">%칭호%</p>
          </div>
        </div>
        <div className='pt-1'>
        {/* 이미지가 있을 때와 없을 때를 구분하여 스타일링 */}
        {labyrinthData.thumbnailImageId ? (
          <img
            src={labyrinthData.thumbnailImageId}
            alt="미궁 이미지"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: "100%",paddingTop: "69.23%", height: "100%", backgroundColor: "#eee", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span>No Image</span>
          </div>
        )}
      </div>  
        <div>
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>
          <p className='font-bold'>{labyrinthData.labyrinthTitle}</p>
        </div>
        </div>
        <div className='flex flex-row items-center justify-between pt-1'>
          <Link href={`/labyrinth/play/${labyrinthData.labyrinthId}/0`}>
            <PlayArrowIcon className='card_icon' aria-label="시작하기" />
          </Link>
          <ContentPasteSearchIcon className='card_icon' aria-label="관련 게시판 목록 조회" />
          <ThumbUpOffAltIcon className='card_icon' aria-label="좋아요" />
          <GradeIcon className='card_icon' aria-label="별점주기" />
        </div>
      </div>
    );
  };

export default LabyrinthCard