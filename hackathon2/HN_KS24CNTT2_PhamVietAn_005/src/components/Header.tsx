import {HomeOutlined} from '@ant-design/icons';

export default function Header() {
  return (
    <div className='bg-[#009689] w-full text-white h-[100px] flex items-center justify-center rounded-2xl'>
       <p className='text-[40px] font-semibold'><HomeOutlined /> Quản Lý Kho</p> 
    </div>
  )
}
