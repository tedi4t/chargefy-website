/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['127.0.0.1', 'res.cloudinary.com'],
	},
	i18n: {
		locales: ['uk', 'ru'],
		defaultLocale: 'uk',
	},
};
