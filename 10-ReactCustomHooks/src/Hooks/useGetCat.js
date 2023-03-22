import {useQuery} from '@tanstack/react-query'
export const useGetCat = () => {
    const {data, refetch, isLoading: isCatLoading, error} = useQuery(["cat"], async () => {
        fetch('https://catfact.ninja/fact')
        .then((res) => res.json()
        .then((data) => {
            return data;
        }))
    })
    const refetchData = () => {
        alert("DATA REFETCHED")
        refetch()
    }
    if(error) {
        console.log(error)
    }
    return {data, refetch, isCatLoading}
}