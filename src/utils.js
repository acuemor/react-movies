
export function formatDate(dateString) {
	const date = new Date(dateString);
	const now = new Date();

	// Difference in ms
	const diffInMilliseconds = now - date;
	const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
	const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

	if (date.getFullYear() !== now.getFullYear()) {
		// Different year
		return date.toLocaleDateString('en-GB');
	} else if (diffInDays < 7) {
		// Less than 1 week
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const dayOfWeek = days[date.getDay()];
		return `Last ${dayOfWeek}`;
	} else if (diffInHours < 24) {
		// Less than 24 hours
		return `${diffInHours} hours ago`;
	} else {
		// Current year
		return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
	}
}