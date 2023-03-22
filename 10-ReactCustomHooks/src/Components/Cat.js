import {useGetCat} from '../Hooks/useGetCat.js'
export const Cat = () => {
    const {data, isCatLoading, refetchData} = useGetCat()
    if(isCatLoading) return <h1>Loading...</h1>
    return (
        <div>
            <button onClick = {refetchData}>REFETCH</button>
            <h1>{catData?.fact}</h1>
        </div>
    )
}