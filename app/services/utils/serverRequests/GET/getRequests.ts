import { Schema } from 'normalizr';
import { camelizeAndNormalize } from '../../core';
import checkNetwork from '../../core/checkNetwork/checkNetwork';
import { getToken } from './../../secureStorage/secureStorage';

export const getRequestWithHeader = (fullUrlRoute: string, schema: Schema) =>
  checkNetwork().then(() =>
    getToken().then(token =>
      fetch(fullUrlRoute, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      }).then(response =>
        response.json().then(json => {
          if (!response.ok) {
            return Promise.reject(json);
          }
          return Promise.resolve(camelizeAndNormalize(json, schema));
        })
      )
    )
  );
