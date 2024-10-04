import { useRouter } from 'next/navigation'
import { Checkbox } from './ui/checkbox'
import { Filter } from '@/app/page';


type Props={
    title:string,
    value:string,
    options:{key:string,value:string}[],
    filter:Filter,
}
const FilterComponent = ({title,value,options,filter}:Props) => {
  const router=useRouter();
    const onCheckedChange=(chosenValue:string)=>{
        router.push(`?${new URLSearchParams({
            ...filter,[value]:chosenValue
        })}`)
  }
  

    return (
    <div className=''>
        <h1>{title}</h1>
        <div className='pl-5 flex flex-col gap-1'>

        {
            options.map((option:{key:string,value:string},index:number)=>{
                return <div key={index} onClick={()=>onCheckedChange(option.value)} className='cursor-pointer flex gap-2 items-center'>
                    <Checkbox className='border-white' checked={option.value===filter[value as 'limit'|'categories'|'difficulties']}/>
                    <h2 className=''>{option.key}</h2>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default FilterComponent