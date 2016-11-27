'use strict';

const fs = require('fs');
const countries = require('./countries');
const keywords = require('./keywords');

// read file
fs.readFile('./PeopleToRate2.txt', 'utf8', function (err, data) {
  if (err) throw err;

	// restructure data for ease of use

  let profiles = data.split('\r\n');
	profiles.pop();
	profiles.forEach((currentProfile, index, profiles) => {
		let currentProfileData = currentProfile.split('|');
		profiles[index] = {
			publicProfileURL: currentProfileData[0].trim(),
			name: currentProfileData[1].trim(),
			lastName: currentProfileData[2].trim(),
			title: currentProfileData[3].trim(),
			geographicArea: currentProfileData[4].trim(),
			numberOfRecommendations: currentProfileData[5].trim(),
			numberOfConnections: currentProfileData[6].trim(),
			currentRole: currentProfileData[7].trim(),
			industry: currentProfileData[8].trim(),
			country: currentProfileData[9].trim()
		};
	})

	// filter data by country

	const profilesFilteredByCountry = profiles.filter(currentProfile => {
		let profileCountryOk = false;
		for(let ct of countries) {
			let cpct = currentProfile.geographicArea.toLowerCase().indexOf(ct);
			profileCountryOk |= cpct === -1
				?	false
				: true;
		}
		return profileCountryOk;
	});

	// filter data by role

	const profilesFilteredByRole = profilesFilteredByCountry.filter(currentProfile => {
		let profileRoleOk = false;
		for(let kw of keywords) {
			let cpcr = currentProfile.currentRole.toLowerCase().indexOf(kw);
			profileRoleOk |= cpcr === -1
				?	false
				: true;
		}
		return profileRoleOk;
	});

	// order data by number of recomendations

	let profilesOrderedByRec = profilesFilteredByRole.sort((a,b) => {
		if (parseInt(a.numberOfRecommendations) < parseInt(b.numberOfRecommendations))
			return 1;
		if (parseInt(a.numberOfRecommendations) > parseInt(b.numberOfRecommendations))
			return -1;
		return 0;
	});

	console.log(profilesOrderedByRec);
});