var logos = [{
		"image": "images/logo_boum.png",
		"link": "http://comics.boumerie.com/about/",
		"name": "Boum"
	}, {
		"image": "images/logo_tlauzon.png",
		"link": "https://www.instagram.com/toddlauzon/",
		"name": "Todd Lauzon"
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
	text = "Canine & Keyboard logo by ";
	document.write("<img alt = '"+ text + logos[logoIndex].name +" A friendly cartoon dog holding a keyboard with a keyboard hanging from around the neck.' src='" + logos[logoIndex].image + "' >");
}

function attribution() {
	document.write("<a href='" + logos[logoIndex].link + "' >" + logos[logoIndex].name + "</a>");
}
