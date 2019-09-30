const categories = [
	{
		id: 'plants',
		name: 'Plants',
		tags: ['products', 'inspirations'],
		count: 147,
		image: require('../assets/images/seeds.png')
	},

	{
		id:'seeds',
		name: 'Seeds',
		tags: ['products', 'shop'],
		count:16,
		image: require('../assets/images/seeds.png')
	},

	{
		id:'flowers',
		name: 'Flowers',
		tags: ['products', 'inspirations'],
		count:16,
		image: require('../assets/images/seeds.png')
	},

	{
		id:'sprayers',
		name: 'sprayers',
		tags: ['products', 'shop'],
		count:16,
		image: require('../assets/images/seeds.png')
	},

	{
		id:'pots',
		name: 'pots',
		tags: ['products', 'inspirations'],
		count:16,
		image: require('../assets/images/seeds.png')
	},

	{
		id:'fertilizers',
		name: 'fertilizers',
		tags: ['products', 'shop'],
		count:16,
		image: require('../assets/images/seeds.png')
	},


];

const products = [
	{
		id:1,
		name:'16 Best Plants thrive in your bedroom',
		description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
		tags: ['Interior','27m²','Ideas'],
		images: [
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),

			//put three extra images

			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
			require('../assets/images/plants_1.png'),
			require('../assets/images/plants_2.png'),
			require('../assets/images/plants_3.png'),
		]
	}
];

const explore = [
	//images
	require('../assets/images/explore_1.png'),
	require('../assets/images/explore_2.png'),
	require('../assets/images/explore_3.png'),
	require('../assets/images/explore_4.png'),
	require('../assets/images/explore_5.png'),
	require('../assets/images/explore_6.png'),
];

const profile = {
	username: 'react-ui-kit',
	location: 'Europe',
	email: 'contact@react-ui-kit.com',
	avatar: require('../assets/images/avatar.png'),
	budget: 2500,
	monthly_cap:5000,
	notification: true,
	newsletter: false,
};

export {
	categories,
	products,
	profile,
	explore
}
