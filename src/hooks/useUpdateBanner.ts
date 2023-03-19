import { useCallback } from 'react'
import { mutate } from 'swr'

import ProductServices from '@/services/ProductService'

const useUpdateUser = () => {
  return useCallback(
    async ( name: string, description: string, image: any ) => {
      await ProductServices.updateBanner(name, description, image)
      mutate('/api/me')
    },
    []
  )
}

export default useUpdateUser
