  var mecss = document.createElement('style');
	mecss.innerHTML = '.activateMessy,.closeMessy{color:#FFF !important;text-decoration:none !important;font-weight:700}.modalDialogMessy{position:fixed;font-family:sans-serif;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.8);opacity:1; z-index:10000}.modalDialogMessy>div{width:400px;position:relative;margin:10% auto;padding:5px 20px 13px;border-radius:10px;background:#fff}.closeMessy{background:#606061;line-height:25px;position:absolute;right:-12px;text-align:center;top:-10px;width:24px;border-radius:12px}.closeMessy:hover{background:#dc143c}.activateMessy{color:#fff;background:#000}.activateMessy:hover{background:#b8860b}.aTwoMessy:hover{background:#00d9ff}.aThreeMessy:hover{background:#3cb371}a:hover{color:#fff}';
	document.head.appendChild(mecss);
	var mescriptyscript = document.createElement('script');
	mescriptyscript.innerHTML = 'function closeTheBoxModalNowOrElse(){var t=document.getElementById("openModal");t.parentNode.removeChild(t)}function fontbombactivate(){var t=document.createElement("script");t.type="text/javascript",t.src="https://gitcdn.xyz/repo/turquoise-turtle/reimagined-giggle/master/fontbomb.js",document.body.appendChild(t)}function frenchtoastactivate(){var t=document.createElement("script");t.type="text/javascript",t.src="https://gitcdn.xyz/repo/turquoise-turtle/reimagined-giggle/master/frenchtoast.js",document.body.appendChild(t)}function xraygogglesactivate(){var t=document.createElement("script");t.src="https://goggles.mozilla.org/webxray.js",t.className="webxray",t.setAttribute("data-lang","en-US"),t.setAttribute("data-baseuri","https://goggles.mozilla.org"),document.body.appendChild(t)}function kathackactivate(){var t=document.createElement("script");t.src="https://gitcdn.xyz/repo/turquoise-turtle/reimagined-giggle/master/kathack.js",t.type="text/javascript";var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js",e.type="text/javascript",document.body.appendChild(t,e)}function kickassactivate(){var t=document.createElement("script");t.src="https://hi.kickassapp.com/kickass.js",t.type="text/javascript",document.body.appendChild(t)}';
	document.body.appendChild(mescriptyscript);
	var dcontainer = document.createElement('div');
	dcontainer.innerHTML = '<div id="openModal" class="modalDialogMessy"><div><a href="#close" onclick="closeTheBoxModalNowOrElse();" title="Close" class="closeMessy">X</a><h1>Mess up the page!</h1><h3><a class="activateMessy" href="#" onclick="closeTheBoxModalNowOrElse();fontbombactivate();" id="fontbomb">FontBomb</a></h3><h3><a class="activateMessy aTwoMessy" href="#" onclick="closeTheBoxModalNowOrElse();frenchtoastactivate();">French Toast</a></h3><h3><a class="activateMessy aThreeMessy" href="#" onclick="closeTheBoxModalNowOrElse();xraygogglesactivate();">X-Ray Goggles</a></h3><h3><a class="activateMessy" href="#" onclick="closeTheBoxModalNowOrElse();kathackactivate();">KatHack</a></h3><h3><a class="activateMessy aTwoMessy" href="#" onclick="closeTheBoxModalNowOrElse();kickassactivate();">Asteroids</a></h3></div></div>';
	document.body.appendChild(dcontainer);
