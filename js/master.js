(() => {

	var badge = document.querySelector('#badge');
			// log some stuff we want to work with
			// 
	var allTheBadges = document.querySelectorAll('.isabadge');

	function logMyId() {
			// log some stuff we want it to do
	console.log(this.id);
		debugger;
	}

		// how do we want to do that
		badge,addEventListener("click", logMyId);

		allTheBadges.forEach(currentbadge) => currentbadge.
			addEventListener('click', logMyId));

}();