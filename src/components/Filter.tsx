import React from 'react'
import FilterComponent from './FilterComponent'
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer'
import {Filter as FilterIcon} from 'lucide-react'
import { Filter } from '@/app/page'
const filterOptions=[
    {
        title:'Limit',
        value:'limit',
        options:[
            {
            key:'5',
            value:'5',
        },
            {
            key:'10',
            value:'10',
        },
            {
            key:'20',
            value:'20',
        },
    ]
    },
    {
        title:'Difficulty',
        value:'difficulties',
        options:[
            {
            key:'Easy',
            value:'easy',
        },
            {
            key:'Medium',
            value:'medium',
        },
            {
            key:'Hard',
            value:'hard',
        },
            {
            key:'Random',
            value:'easy,medium,hard',
        },
    ]
    },
    {
        title:'Category',
        value:'categories',
        options:[
            {
            key:'Science',
            value:'science',
        },
            {
            key:'Music',
            value:'music',
        },
            {
            key:'Geography',
            value:'geography',
        },
            {
            key:'Food and Drink',
            value:'food_and_drink',
        },
            {
            key:'General knowledge',
            value:'general_knowledge',
        },
        {
            key:'Random',
            value:'science,music,geography,food_and_drink,general_knowledge'
        }
    ]
    },
]

const FilterPage = ({filter}:{filter:Filter}) => {
  return (
        <Drawer direction='left'  >
             <DrawerTrigger className=''><div className='flex items-center px-3 py-1 hover:bg-white/80 rounded-md gap-2 font-semibold text-lg text-black  bg-white'><FilterIcon className='w-5 h-5'/>Filter</div></DrawerTrigger>
        <DrawerContent className='bg-[#5b64d4] text-white min-h-screen w-[70%] md:w-[60%] lg:w-[30%] px-10 '>   
        {
            filterOptions.map((option,index)=>{
                return <div key={index} className='flex flex-col gap-4'>
                    <FilterComponent {...option} filter={filter} />
                </div>
            })
        }
        </DrawerContent>
        </Drawer>

    
  )
}

export default FilterPage