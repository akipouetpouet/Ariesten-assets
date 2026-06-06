// ---------------------------------------
// Expand/Collapse by Gunblaza
// ----------------------------------------

function ccreateCookie(name,value,days) {
if (days) {
	 var date = new Date();
	 date.setTime(date.getTime()+(days*24*60*60*1000));
	 var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

// Read cookies
function creadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
		 var c = ca[i];
		 while (c.charAt(0)==' ') c = c.substring(1,c.length);
		 if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
	return null;
}

// Delete cookies
function cdeleteCookie(name) {
	ccreateCookie(name,"",-1);
}

// Collapse categories and set the cookies
function catcollapse(cnum) {

	var cat = $('#cat_'+cnum);
	var catMain = $('#main_'+cnum);
	if(cat.is(':visible')) {
		 cat.slideToggle(400);
		 catMain.html(Expand);
		 catMain.parent().parent().addClass("collapsed");
		 ccreateCookie("Cat"+cnum,"Collapsed",30);
		} else {
		 cat.slideToggle(300);
		 catMain.html(Collapse);
		 catMain.parent().parent().removeClass("collapsed");
		 cdeleteCookie("Cat"+cnum);
	}
}

// ----------------------------------------
// Members online today
// ----------------------------------------

var ipb_var_cookieid      = "";
var ipb_var_cookie_domain = "";
var ipb_var_cookie_path   = "/";

function expand_mot() {
	var mot = document.getElementById('mot');
	var e_mot = document.getElementById('mot_explink');
	var c_mot = document.getElementById('mot_collink');

	mot.style.display = '';
	e_mot.style.display = 'none';
	c_mot.style.display = 'inline';

	domain = "";
	path   = "/";
	
	if ( ipb_var_cookie_domain != "" )
	{
		domain = '; domain=' + ipb_var_cookie_domain;
	}
	
	if ( ipb_var_cookie_path != "" )
	{
		path = ipb_var_cookie_path;
	}
	
	document.cookie = ipb_var_cookieid + "hidemot=0; path=" + path + "; expires=Wed, 1 Jan 2020 00:00:00 GMT" + domain + ';';

	return;
}
function collapse_mot() {
	var mot = document.getElementById('mot');
	var e_mot = document.getElementById('mot_explink');
	var c_mot = document.getElementById('mot_collink');

	mot.style.display = 'none';
	e_mot.style.display = 'inline';
	c_mot.style.display = 'none';

	domain = "";
	path   = "/";
	
	if ( ipb_var_cookie_domain != "" )
	{
		domain = '; domain=' + ipb_var_cookie_domain;
	}
	
	if ( ipb_var_cookie_path != "" )
	{
		path = ipb_var_cookie_path;
	}
	
	document.cookie = ipb_var_cookieid + "hidemot=1; path=" + path + "; expires=Wed, 1 Jan 2020 00:00:00 GMT" + domain + ';';

	return;
}
