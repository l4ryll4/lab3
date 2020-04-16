function clean(){
	document.getElementById('text1').value = '';
	document.getElementById('text2').value = '';
}

function rus_to_latin ( str ) {
	
	str = document.getElementById('text1').value
    
    var ru = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_str = [];
    
    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
    
    for ( var i = 0; i < str.length; ++i ) {
       n_str.push(
              ru[ str[i] ]
           || ru[ str[i].toLowerCase() ] == undefined && str[i]
           || ru[ str[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
       );
    }
    
    document.getElementById('text2').value = n_str.join('');
}

function latin_to_rus ( str ) {
	
	str = document.getElementById('text2').value
    
    var latin = {
        'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 
        'e': 'е', 'j': 'ж', 'z': 'з', 'i': 'и', 
        'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 
        'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 
        'f': 'ф', 'h': 'х', 'c': 'ц', 'ch': 'ч', 'sh': 'ш', 
        'shch': 'щ', 'y': 'ы', 'e': 'е', 'u': 'ю', 'ya': 'я',
    }, n_str = [];
    
    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
    
    for ( var i = 0; i < str.length; ++i ) {
       n_str.push(
              latin[ str[i] ]
           || latin[ str[i].toLowerCase() ] == undefined && str[i]
           || latin[ str[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
       );
    }
    
    document.getElementById('text1').value = n_str.join('');
}

function changeCSS(cssFile, cssLinkIndex) {
	var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
	
	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", cssFile);
	
	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}