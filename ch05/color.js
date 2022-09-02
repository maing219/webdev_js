// function linksSetColor(color) {
//     var alist = document.querySelectorAll('a')
//     for(var i=0; i<alist.length; i++) {
//         alist[i].style.color = color;
//     }
// }

// function bodySetColor(color) {
//     document.querySelector('body').style.color = color;
// }

// function bodySetBackgroundColor(color) {
//     document.querySelector('body').style.backgroundColor = color;
// }

var Body = {
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    },
    
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor : function(color) {
        var alist = document.querySelectorAll('a')
        for(var i=0; i<alist.length; i++) {
            alist[i].style.color = color;
        }
    }
}

function dayNightHandler(self) {
    if(self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        self.value = 'day';
        Links.setColor('powderblue');
    }

    else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        self.value = 'night';
        Links.setColor('blue');
    }
}