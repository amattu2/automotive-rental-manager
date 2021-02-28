/*
  Produced 2019-2021
  By https://amattu.com/links/github
  Copy Alec M.
  License GNU Affero General Public License v3.0
*/

// Loops
document.querySelectorAll('.profile .profile-item').forEach(element => {
	// Events
	element.onclick = (event) => {
		event.stopPropagation();
	}
});

// Events
document.getElementById('profile-toggle').onclick = (event) => {
	document.getElementById('profile-toggle').classList.toggle('active');
};
document.getElementById('profile-toggle').onmouseenter = (event) => {
	// Checks
	if (document.getElementById('profile-toggle').classList.contains("active")) { return false }
	document.getElementById('profile-expand').textContent = document.getElementById('profile-expand').textContent == "expand_more" ? "expand_less" : "expand_more";
};
document.getElementById('profile-toggle').onmouseleave = (event) => {
	if (document.getElementById('profile-toggle').classList.contains("active")) { return false }
	document.getElementById('profile-expand').textContent = document.getElementById('profile-expand').textContent == "expand_more" ? "expand_less" : "expand_more";
};
