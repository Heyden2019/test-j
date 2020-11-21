import { setGists, setGistsError, setIsLoading, setTotalPages } from 'src/redux/slices/gists';
import { AppThunk } from 'src/redux/Store';
import { GITHUB_API } from '../config';

interface GetGistsParams {
  page?: number;
  inPage?: number;
  since?: Date;
}

export const getGists = (params: GetGistsParams = {}): AppThunk => async (
  dispatch
) => {
  dispatch(setIsLoading(true));
  dispatch(setGistsError(null));
  const { page = 0, inPage = 10, since } = params;
  if(page === 0) dispatch(setTotalPages(1))

  let url = `${GITHUB_API}/gists/public?page=${page}&per_page=${inPage}`;

  if (since) {
    url += `&since=${since.toISOString()}`;
  };

  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
  });

  try {
    const response = await fetch(url, { headers });
    const re = new RegExp(/(?<=\?page=)([\d]+)(?=[^,]+rel=\"last\")/, 'g');
    const pages = +((response.headers.get('link')?.match(re) || [page])[0]);
    const json = await response.json();
    if(json.message) {
      dispatch(setGistsError(json.message));
    } else {
      dispatch(setTotalPages(pages));
      dispatch(setGists(json));
    }
  } catch (error) {
    dispatch(setGistsError(error));
  } finally {
    dispatch(setIsLoading(false));
  }
};
