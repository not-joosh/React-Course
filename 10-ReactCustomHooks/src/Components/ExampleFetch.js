import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { Cat } from './Cat.js'
export const ExampleFetch = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            },
        },
    })
    return (
        <div>
            <QueryClientProvider client = {client}>
                <Cat />
            </QueryClientProvider>
        </div>
    )
}