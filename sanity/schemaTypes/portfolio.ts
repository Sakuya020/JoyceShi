export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // unique url based on title
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Printed Matter', value: 'Printed Matter'},
          {title: 'Digital Interface', value: 'Digital Interface'},
        ],
      },
    },
    {
      name: 'homepage',
      title: 'Homepage',
      type: 'boolean', // true if this project is featured on the homepage
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'agency',
      title: 'Agency',
      type: 'string',
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

/* 
{
	category: "HomePage" | "Printed Matter" | "Digital Interface";
	cover: string;
	title: string;
	type: string;
	client: string?;
	agency: string?;
	awards: string[]?;
	images: string:[];
	desc: string；
}

*/
