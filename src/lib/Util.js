export function getDays(postDate) {
	const ONE_DAY = 1000 * 60 * 60 * 24
	let today = new Date()

	today = today.getDay() + '.' + today.getMonth() + '.' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes()

	let todayInMs = Date.parse(today)

	let difInMin = todayInMs - postDate;
	let diffInDays = Math.round((difInMin) / ONE_DAY);

	let lapsus = [];

	if (difInMin > ONE_DAY) {
		lapsus[0] = "dias";
		lapsus[1] = diffInDays;
	} else {
		lapsus[0] = "minutos";
		lapsus[1] = difInMin;
	}

	return lapsus;
}
