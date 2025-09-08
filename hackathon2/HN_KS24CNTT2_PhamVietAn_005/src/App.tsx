import './App.css'
import Header from './components/Header'
import Add from './components/Add'
import ArchiveList from './components/ArchiveList'

function App() {

  return (
    <>
      <div className='p-10 bg-[#f2f3f5] flex flex-col gap-10 min-h-screen'>
          <Header />
          <Add />
          <ArchiveList />
      </div>
    </>
  )
}

export default App

