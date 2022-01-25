import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function index() {
  const router = useRouter()
  useEffect(() => {
    router.push('/en/home_en')
  }, [])
  return <div></div>
}
