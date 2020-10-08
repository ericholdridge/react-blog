import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './blog';
import heroBackground from './heroBackground';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
      blog,
      heroBackground
    ])
})
