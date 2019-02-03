import { Schema } from 'normalizr';
import { camelizeAndNormalize } from '../../core';
import checkNetwork from '../../core/checkNetwork/checkNetwork';
import { getToken } from '../../secureStorage';

export const putRequestWithHeader = (fullUrlRoute: string, body: object, schema: Schema) =>
  checkNetwork().then(() =>
    getToken().then(token =>
      fetch(fullUrlRoute, {
        body: JSON.stringify(body),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
        method: 'PUT'
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
