import { camelizeKeys } from 'humps';
import { normalize, Schema } from 'normalizr';

const camelizeAndNormalize = (json: object, schema: Schema) =>
  Object.assign({}, normalize(camelizeKeys(json), schema));

export default camelizeAndNormalize;
