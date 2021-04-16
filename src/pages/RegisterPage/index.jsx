import React from 'react'
import {QueryClientProvider, QueryClient} from 'react-query'
import Layout from '../../components/Layout'
import Register from '../../components/Register'

export default function RegisterPage() {
    const queryClient = new QueryClient()

    return (
        <Layout>
            <QueryClientProvider client={queryClient}>
            <Register />
            </QueryClientProvider>
        </Layout>
    )
}
