import React from 'react'
import {QueryClientProvider, QueryClient} from 'react-query'

import Admin from '../../components/Admin'
import Layout from '../../components/Layout'

function AdminPage() {

    const queryClient = new QueryClient()
    
    return (
        <QueryClientProvider client={queryClient}>
        <Layout>
            <Admin />
        </Layout>
        </QueryClientProvider>
    )
}

export default AdminPage;
