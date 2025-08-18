import { GrFormNextLink } from "react-icons/gr"

const KnowMoreButton = ({onClick}) => {
  return (
    <div className="bg-black text-white p-3  gap-1 rounded-lg flex items-center justify-center" onClick={onClick}>
        <button className='font-semibold'>Know More</button>
        <GrFormNextLink className=" text-lg font-bold"/>

    </div>
  )
}

export default KnowMoreButton