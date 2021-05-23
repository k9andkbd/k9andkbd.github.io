var logos = [{
		"image": "images/logo_boum.png",
		"attribution": "<a href='http://comics.boumerie.com/about/'>Boum</a>"
	}, {
		"image": "images/logo_tlauzon.png",
		"attribution": "<a href='https://www.instagram.com/toddlauzon/'>Todd Lauzon</a>"
	}

	/*, {
		"image": "images/logo_sweeny.jpg",
		"attribution": "<a href='https://www.sweeneyboo.com'>Sweeny Boo</a>"
	}, {
		"image": "images/logo_vmatte.jpg",
		"attribution": "<a href='https://www.instagram.com/ness.draws/?hl=en'>Vanessa Matte</a>"
	}, {
		"image": "images/logo_jdelisle.png",
		"attribution": "Jean Delisle"
	}, {
		"image": "images/logo_emartin.png",
		"attribution": "<a href='https://eliezermartin.carrd.co'>Eliezer Martin</a>"
	}, {
		"image": "images/logo_frenaud.png",
		"attribution": "<a href='https://www.facebook.com/FrancisRenaudArt/'>Francis Renaud</a>"
	}
*/
];

var logoIndex = Math.floor(Math.random() * logos.length);

function logo() {
	document.write("<img src='" + logos[logoIndex].image + "'>");
}

function attribution() {
	document.write(logos[logoIndex].attribution);
}
