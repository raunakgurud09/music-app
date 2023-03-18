import { AxiosResponse } from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import apiClient from './apiClient';

// const refreshTokens = async (req: IncomingMessage, res: ServerResponse) => {
//   const response = await apiClient.post(`${environment.apiUrl}/refresh`, undefined, {
//     headers: { cookie: req.headers.cookie },
//   })
//   const cookies = response.headers[SET_COOKIE_HEADER]

//   req.headers.cookie = cookies
//   res.setHeader(SET_COOKIE_HEADER, cookies)
// }

const handleRequest = async (
  req: IncomingMessage,
  res: ServerResponse,
  request: () => Promise<AxiosResponse>
) => {
  try {
    return await request();
  } catch (error) {
    if (error?.response?.status === 401) {
      try {
        // await refreshTokens(req, res)
        // return await request()
        return;
      } catch (innerError) {
        throw new innerError();
      }
    }

    throw new error();
  }
};

export const fetcherSSR = async <T>(
  req: IncomingMessage,
  res: ServerResponse,
  url: string
): Promise<any> => {
  try {
    const url = '/user/profile';
    const request = () =>
      apiClient.get(url, { headers: { cookie: req.headers.cookie } });
    const { data } = await handleRequest(req, res, request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
