import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { Filter } from '../page';

const useGetFilters:()=>[ReadonlyURLSearchParams,Filter] = () => {
    const searchParams=useSearchParams();
    const filter:Filter={
      limit:searchParams.get('limit')||'10',
      categories:searchParams.get('categories')||'science,music,geography,food_and_drink,general_knowledge',
      difficulties:searchParams.get('difficulties')||'easy,medium,hard',
    }
  return (
    [searchParams,filter]
  )
}

export default useGetFilters