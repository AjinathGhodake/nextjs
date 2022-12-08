import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetails() {
    const router = useRouter()
    console.log(router.query);
    
  return (
    <div>
      <h1>Details about product {router.query.productId}</h1>
    </div>
  )
}
