import { useCallback } from 'react';
import { mutate } from 'swr';

import AuthService from '@/services/AuthService';

const useUpdateUser = () => {
  return useCallback(async (userId: string, image: any) => {
    await AuthService.updateProfile(userId, image);
    mutate('/api/me');
  }, []);
};

export default useUpdateUser;
