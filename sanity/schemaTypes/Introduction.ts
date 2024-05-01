export default {
  name: 'introduction',
  title: 'Introduction',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
