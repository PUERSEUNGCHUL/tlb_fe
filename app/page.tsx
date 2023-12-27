import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LabyrinthCard from './ui/labyrinth/LabyrinthCard';

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center p-2'>
        <div>
          <MenuIcon/>
        </div>
        <div>
          <p>THE LABYRINTH</p>
        </div>
        <div>
          <SearchIcon/>
        </div>
      </header>
      <main className='bg-gray-200 p-4 flex flex-row items-center justify-between'>
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
        <LabyrinthCard />
      </main>
      <section className="flex">
        <ul className="flex space-x-4 p-2">
          <li className="hover:font-bold hover:underline cursor-pointer">미궁</li>
          <li className="hover:font-bold hover:underline cursor-pointer">오늘의 퀴즈</li>
          <li className="hover:font-bold hover:underline cursor-pointer">미니게임</li>
          <li className="hover:font-bold hover:underline cursor-pointer">커뮤니티</li>
          <li className="hover:font-bold hover:underline cursor-pointer">고객센터</li>
        </ul>
      </section>
    </>
  )
}
