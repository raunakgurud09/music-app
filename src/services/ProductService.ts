import apiClient from '@/lib/apiClient';

const getProducts = async (fields: Record<string, any> = {}): Promise<any> => {
  try {
    const url = '/products';
    const { data } = await apiClient.get(url, { params: fields });
    return data.products;
  } catch (error) {}
};

const addProducts = async ({
  name,
  description,
  price,
  image,
  category,
}: any): Promise<any> => {
  try {
    const url = '/products';

    const { data } = await apiClient.post(url, {
      name,
      description,
      price,
      image,
      category,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const getProduct = async (id: string): Promise<any> => {
  try {
    const url = `/products/${id}`;
    const { data } = await apiClient.get(url);

    return data;
  } catch (error) {}
};

const removeProduct = async (id: string): Promise<any> => {
  try {
    const url = `/products/${id}`;
    const { data } = await apiClient.delete(url);
    return data;
  } catch (error) {}
};

const getBanner = async (): Promise<any> => {
  try {
    const url = '/products/banners';
    const { data } = await apiClient.get(url);
    return data.data;
  } catch (error) {
    return;
  }
};

const getCategory = async (): Promise<any> => {
  try {
    const url = '/products/categories';
    const { data } = await apiClient.get(url, {});
    return data.data;
  } catch (error) {
    return;
  }
};

const updateBanner = async (
  name: string,
  description: string,
  image: any
): Promise<any> => {
  try {
    const url = '/products/banners';
    const { data } = await apiClient.post(url, { name, description, image });
  } catch (error) {
    console.log(error);
  }
};

const ProductServices = {
  getProducts,
  getProduct,
  getBanner,
  getCategory,
  updateBanner,
  addProducts,
  removeProduct,
};

export default ProductServices;
