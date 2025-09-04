export default function Ex05() {
  return (
    <div>
        <div className="w-[300px] h-[200px] bg-[#d7f2fe] rounded-[16px] p-[24px] border border-[#b6e6fb]">
            <div className="w-full h-full bg-[#b6e6fb] mx-auto border border-[#7fd1f9] relative">
                <p className="text-[#056aa1] font-bold p-4">Relative parent</p>
                <button className="text-white bg-[#0ea5e9] rounded-[8px] p-[12px_24px] absolute bottom-0">Absolute child</button>
            </div>
        </div>
    </div>
  )
}
