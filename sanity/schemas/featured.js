export default {
    name: 'featured',
    type: 'document',
    title: 'Featured Menu categories',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Featured Catehory name',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            title: 'Short description',
            type: 'string',
            validation: (Rule) => Rule.max(200),
          },
        {
            name: 'restaurant',
            type: 'array',
            title: 'Restaurants',
            of: [{type: 'reference', to: [{ type: 'restaurant'}]}],
        },
    ],
}