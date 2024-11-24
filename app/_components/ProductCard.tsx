import { useRouter } from 'next/navigation'

type ProductCardProps = {
  category: string
  subcategory: string
  productName: string
  creatorName: string
  price: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  category,
  subcategory,
  productName,
  creatorName,
  price,
}) => {
  const router = useRouter()

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push('/product-detail')}
    >
      <div className="bg-darkBg rounded-xl w-[237px] h-[237px] flex items-center justify-center">
        <div className="text-md font-light">
          {category}
          <div>&gt; {subcategory}</div>
        </div>
      </div>

      <div className="mt-2 font-bold text-sm leading-[21px]">{productName}</div>
      <div className="text-gray font-normal text-sm leading-[21px]">
        {creatorName}
      </div>
      <div className="text-sm leading-[21px]">★★★★★ 5.0</div>
      <div className="font-bold text-sm leading-[25px]">${price}</div>
    </div>
  )
}

export default ProductCard
