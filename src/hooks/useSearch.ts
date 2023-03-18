import { useRouter } from 'next/router';
import useSWR from 'swr';

import ProductService from '@/services/ProductService';

interface Params {
  category?: string;
  sort?: string;
  keyword?: string;
}

const useSearch = ({ category, sort, keyword }: Params) => {
  const { isReady } = useRouter();

  if (isReady) {
    console.log(category, sort, keyword);
    let params: Params = {};

    if (category !== undefined) {
      console.log('category');
      params = { ...params, category };
    }
    if (sort !== undefined) {
      console.log('sort');
      params = { ...params, sort };
    }
    if (keyword !== undefined) {
      console.log('keyword', keyword);
      params = { ...params, keyword };
    }

    const value = isReady ? ['/products', JSON.stringify(params)] : null;
    console.log(value);
    console.log(params);
    const { data, error } = useSWR(value, (_: any, params: string) => {
      try {
        const parsedParams = JSON.parse(params);
        const product = ProductService.getProducts({
          ...parsedParams,
          limit: 12,
        });
        console.log(product);
        return product;
      } catch (error) {
        console.log(error);
      }
    });
    if (isReady) {
    }

    const isLoading = !data && !error;

    return {
      data,
      error,
      isLoading,
    };
  } else {
    return {
      data: null,
      error: true,
      isLoading: true,
    };
  }
};

export default useSearch;
