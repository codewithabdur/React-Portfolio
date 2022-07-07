// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import abouts from './abouts'
import contact from './contact'
import brands from './brands'
import experiences from './experiences'
import skills from './skills'
import works from './works'
import workExperience from './workExperience'

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    testimonials,abouts,brands,experiences,skills,works,workExperience,contact,
  ]),
})
