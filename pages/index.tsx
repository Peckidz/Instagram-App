import Header from '../components/Header'
import Stories from '../components/Stories'


import Feed from '../components/Feed'
export default function Home() {
  
  return (
    <div className='pt-20 bg-gray-100'>
    <Header />
    
    <div className='mt-10'>
      <div className='h-screen relative'>
        <div className=''>
          <Stories />
          <Feed/>
        </div>
      </div>
    </div>
    </div>    
  )
}
