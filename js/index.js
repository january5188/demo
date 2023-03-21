setInterval(function() {
  clock();
}, 1000);

function clock11()
{
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  
  if ($('.h').text() != ((hours < 10 ? "0" : "") + hours)){
     $('.h').text((hours < 10 ? "0" : "") + hours);
     shake($('.h'));
  }
  
  if ($('.m').text() != ((minutes < 10 ? "0" : "") + minutes)) {
    $('.m').text((minutes < 10 ? "0" : "") + minutes);
    shake($('.m'));
  }
  
  if ($('.s').text() != ((seconds < 10 ? "0" : "") + seconds)) {
    $('.s').text((seconds < 10 ? "0" : "") + seconds);
    shake($('.s'));
  }
}

function clock() {
	var BirthDay = new Date("2/22/2022 00:00:00");
	var today = new Date();
	var timeold = (today.getTime() - BirthDay.getTime());
	var sectimeold = timeold / 1000
	var secondsold = Math.floor(sectimeold);
	var msPerDay = 24 * 60 * 60 * 1000
	var e_daysold = timeold / msPerDay
	var daysold = Math.floor(e_daysold);
	var e_hrsold = (e_daysold - daysold) * 24;
	var hrsold = Math.floor(e_hrsold);
	var e_minsold = (e_hrsold - hrsold) * 60;
	var minsold = Math.floor((e_hrsold - hrsold) * 60);
	var seconds = Math.floor((e_minsold - minsold) * 60);
	
	//console.log( daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒")
	
	if ($('.d').text() != (daysold+"")){
		$('.d').text(daysold);
		shake($('.d'));
	}

	if ($('.h').text() != (hrsold+"")){
		$('.h').text(hrsold);
		shake($('.h'));
	}

	if ($('.m').text() != (minsold+"")) {
		$('.m').text(minsold);
		shake($('.m'));
	}

	if ($('.s').text() != (seconds+"")) {
		$('.s').text(seconds);
		shake($('.s'));
	}
}

$(document).load(function(){
  clock();
});

function shake(t) {
  t.addClass('shake-constant');
  setTimeout(function() {
    t.removeClass('shake-constant');
  }, 470)
}