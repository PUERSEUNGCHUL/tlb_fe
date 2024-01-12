import React from 'react'
import ViewInArIcon from '@mui/icons-material/ViewInArTwoTone';
import GppGoodIcon from '@mui/icons-material/GppGoodTwoTone';
import LocalActivityIcon from '@mui/icons-material/LocalActivityTwoTone';
import PublicIcon from '@mui/icons-material/PublicTwoTone';
import GiteIcon from '@mui/icons-material/GiteTwoTone';
import ConstructionIcon from '@mui/icons-material/ConstructionTwoTone';

const MainMenu = () => {
  return (
    <>
        <section className="flex">
            <ul className="flex space-x-4 p-2">
                <li className="hover:font-bold hover:underline cursor-pointer">미궁</li>
                <li className="hover:font-bold hover:underline cursor-pointer">오늘의 퀴즈</li>
                <li className="hover:font-bold hover:underline cursor-pointer">미니게임</li>
                <li className="hover:font-bold hover:underline cursor-pointer">커뮤니티</li>
                <li className="hover:font-bold hover:underline cursor-pointer">고객센터</li>
            </ul>
        </section>
        <section className='flex flex-col'>
            <div className='flex flex-row items-center justify-evenly'>
                <div className='flex flex-col items-center cursor-pointer'>
                    <p className='text-2xl bold'>ALL</p>
                    <label>모든 미궁</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <GppGoodIcon className='text-6xl'/>
                    <label>인증 미궁</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <ViewInArIcon className='text-6xl'/>
                    <label>자유 미궁</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <LocalActivityIcon className='text-6xl'/>
                    <label>기획 미궁</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <PublicIcon className='text-6xl'/>
                    <label>외부 미궁</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <GiteIcon className='text-6xl'/>
                    <label>호스팅 미궁</label>
                </div>
            </div>
            <div className='flex flex-row items-center justify-evenly'>
                <div className='flex flex-col items-center cursor-pointer'>
                    <ConstructionIcon className='text-6xl'/>
                    <label>미궁 제작</label>
                </div>
                <div className='flex flex-col items-center cursor-pointer'>
                    <ConstructionIcon className='text-6xl'/>
                    <label>제작 미궁 관리</label>
                </div>
            </div>
            </section>

    </>
  )
}

export default MainMenu