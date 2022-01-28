const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const ADS_ID = process.env.ADS_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
	//@ts-ignore
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value: number;
	[key: string]: any;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, ...rest }: GTagEvent, cb?: () => void): void => {
	//@ts-ignore
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
		...rest,
	});

	if (action === 'purchase') {
		window.gtag('event', 'conversion', {
			'send_to': `${ADS_ID}/x02vCOTTspQDEJ6Ot7Io`,
			'value': value,
			'currency': 'UAH',
			'transaction_id': '',
			'event_callback': cb
		});
	}
};
