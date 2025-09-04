export default function Ex08() {
  return (
    <div className="w-[50%]">
        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center ma">Các phần tử nằm bên trái</p>

        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4 justify-end">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center">Các phần tử nằm bên phải</p>

        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4 justify-center">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center">Các phần tử nằm ở giữa</p>
        
        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4 justify-between">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center">Các phần tử giãn ra hai bên</p>

        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4 justify-around">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center">Các phần tử giãn đều 2 bên</p>

        <div className="border-[1px] border-gray-200 rounded-[6px] flex gap-4 justify-evenly">
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">01</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">02</div>
            <div className="p-[12px_16px] bg-blue-500 text-white rounded-[6px]">03</div>
        </div>
        <p className="text-center">Các phần tử giữa đều</p>
    </div>
  )
}
