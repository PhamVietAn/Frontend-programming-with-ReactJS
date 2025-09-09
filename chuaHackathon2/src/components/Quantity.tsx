interface QuantityProps {
  total: number;
  liked: number;
}

export default function Quantity({ total, liked }: QuantityProps) {
  return (
    <div className="flex gap-8 justify-center">
      <div className="p-4 text-center rounded-2xl border-[2px] border-[hsl(0,0%,100%,0.3)] bg-[hsl(0,0%,100%,0.2)] min-w-[90px]">
        <p className="text-xl font-bold text-white">{total}</p>
        <p className="text-white">Bài viết</p>
      </div>
      <div className="p-4 text-center rounded-2xl border-[2px] border-[hsl(0,0%,100%,0.3)] bg-[hsl(0,0%,100%,0.2)] min-w-[90px]">
        <p className="text-xl font-bold text-white">{liked}</p>
        <p className="text-white">Lượt thích</p>
      </div>
    </div>
  );
}