import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

async function sendRequest(){
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data
}


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Posts/>
    </QueryClientProvider>
  )
}

function Posts(){
  // const client  = useQueryClient()
  const {data, isLoading, error} = useQuery({queryKey : ["todo"], queryFn:sendRequest})
  if(error){
    return <div>
      <h3>Error while fetching the data</h3>
    </div>
  }
  if(isLoading){
    return "Loading..."
  }
  return <div>
        {JSON.stringify(data)}
  </div>
}


export default App
