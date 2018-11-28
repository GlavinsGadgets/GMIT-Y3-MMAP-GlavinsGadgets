(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 450,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Android_atlas_.png", id:"Android_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Android_atlas_", frames: [[0,0,1920,1080],[0,2774,1080,450],[0,1082,1920,1080],[0,2164,1080,608]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.GGCoverPhoto = function() {
	this.spriteSheet = ss["Android_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.P1040527 = function() {
	this.spriteSheet = ss["Android_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Untitled2 = function() {
	this.spriteSheet = ss["Android_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Untitled42 = function() {
	this.spriteSheet = ss["Android_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P1040527();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1080,450);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Untitled42();
	this.instance.setTransform(-540,-304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.instance_1 = new lib.Untitled2();
	this.instance_1.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GGCoverPhoto();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


// stage content:
(lib.AndoridRepairs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		
		this.button_4.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			top.location = "../index.html#PricingAndroid";
		}
	}
	this.frame_29 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(25).call(this.frame_29).wait(2));

	// Layer 4
	this.button_4 = new lib.Symbol3copy2();
	this.button_4.setTransform(55.4,211.3,0.422,0.422,0,0,0,-516.8,-224.9);
	this.button_4.alpha = 0;
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(4).to({_off:false},0).wait(1).to({regX:0,regY:0,x:273.6,y:306.2,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(17));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(775.7,231.3,0.563,0.563,0,0,0,960.1,539);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:960,regY:540,scaleX:0.54,scaleY:0.54,x:775.6,y:231.8,alpha:0.111},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.222},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:775.7,alpha:0.333},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:775.6,y:231.7,alpha:0.444},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:775.7,alpha:0.556},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:775.6,alpha:0.667},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:775.7,y:231.6,alpha:0.778},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:775.6,alpha:0.889},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:775.7,alpha:1},0).wait(22));

	// Layer 3
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(540,225,1,1,0,0,0,540,225);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,97,1379.7,727);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;