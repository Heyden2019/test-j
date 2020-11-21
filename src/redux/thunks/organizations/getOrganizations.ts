import {
  setOrganizations,
  setOrganizationsError,
  setIsLoading,
  setSince,
} from 'src/redux/slices/organizations';
import { AppThunk } from 'src/redux/Store';
import { GITHUB_API } from '../config';

interface GetOrganizationsParams {
  inPage?: number;
  since?: number;
}

export const getOrganizations = (
  params: GetOrganizationsParams = {}
): AppThunk => async (dispatch) => {
  dispatch(setIsLoading(true));
  const { inPage = 10, since = 0 } = params;

  const url = `${GITHUB_API}/organizations?per_page=${inPage}&since=${since}`;

  const headers = new Headers({
    Accept: 'application/vnd.github.v3+json',
  });

  try {
    const response = await fetch(url, { headers });
    // eslint-disable-next-line no-useless-escape
    const re = new RegExp(/(?<=\&since=)([\d]+)(?=[^,]+rel=\"next\")/, 'g');
    const newSince = +(response.headers.get('link')?.match(re) || [since])[0];
    const json = await response.json();
    if (json.message) {
      dispatch(setOrganizationsError(json.message));
    } else {
      dispatch(setSince(newSince));
      dispatch(setOrganizations(json));
    }
  } catch (error) {
    dispatch(setOrganizationsError(error));
  } finally {
    dispatch(setIsLoading(false));
  }
};
