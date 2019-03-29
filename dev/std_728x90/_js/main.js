function start(){
	var time = .5
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	TweenMax.from(".bg", 7, {x:0})
	tl.add("t1", "+=.1")	
	tl.from(".t1a", time, {x:"-=50", opacity:0, ease:Power4.easeOut}, "t1+=.1")
	tl.from(".t1b", time, {x:"-=50", opacity:0, ease:Power4.easeOut}, "t1+=.7")
	
	tl.add("t1_out", "+=2.3")	
	tl.to(".t1a", time, {x:"+=50", opacity:0, ease:Power4.easeOut}, "t1_out")
	tl.to(".t1b", time, {x:"+=50", opacity:0, ease:Power4.easeOut}, "t1_out+=.1")


	tl.add("t2", "-=.3")	
	tl.from(".t2a", time, {x:"-=50", opacity:0, ease:Power4.easeOut}, "t2+=.1")

	


	
	tl.to(".logoSmall", time, {opacity:0, ease:Sine.easeOut}, "t2_out+=.1")

	tl.from(".t3", time, {opacity:0, ease:Sine.easeOut})

	tl.from([".footer", ".logoBig"], time, {opacity:0, ease:Sine.easeOut}, "+=.3")

}

start()



module.exports = {};

