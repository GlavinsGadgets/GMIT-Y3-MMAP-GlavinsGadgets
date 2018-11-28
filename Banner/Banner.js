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
		{src:"images/Banner_atlas_.png", id:"Banner_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Banner_atlas_", frames: [[0,2164,1920,800],[0,0,1920,1080],[0,1082,1920,1080],[0,2966,1080,608]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.CoverPhoto20170424 = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.GGCoverPhoto = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Untitled2 = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Untitled32 = function() {
	this.spriteSheet = ss["Banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Untitled32();
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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CoverPhoto20170424();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,800);


// stage content:
(lib.ScreenRepairs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			top.location = "../index.html#Pricing";
			
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

	// Layer 5
	this.button_3 = new lib.Symbol3();
	this.button_3.setTransform(273.6,309.4,0.422,0.422);
	this.button_3.alpha = 0;
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(4).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(17));

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(775.7,231.2,0.563,0.563,0,0,0,960.1,539.2);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:960,regY:540,scaleX:0.54,scaleY:0.54,x:775.6,y:231.7,alpha:0.111},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.222},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:775.7,alpha:0.333},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:775.6,y:231.6,alpha:0.444},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:775.7,alpha:0.556},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:775.6,alpha:0.667},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:775.7,y:231.5,alpha:0.778},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:775.6,alpha:0.889},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:775.7,alpha:1},0).wait(22));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(540,225,0.563,0.563,0,0,0,960,400);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,96.9,1379.7,726);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;