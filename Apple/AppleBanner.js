(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1080,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/AppleBanner_atlas_.png", id:"AppleBanner_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"AppleBanner_atlas_", frames: [[0,1082,1920,1080],[0,2164,1920,800],[0,0,1920,1080],[0,2966,1080,608]]}
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
	this.spriteSheet = ss["AppleBanner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.P1040593 = function() {
	this.spriteSheet = ss["AppleBanner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Untitled2 = function() {
	this.spriteSheet = ss["AppleBanner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Untitledappletext = function() {
	this.spriteSheet = ss["AppleBanner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.P1040593();
	this.instance.setTransform(0,0,0.562,0.562);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1079.6,449.9);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Untitledappletext();
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
(lib.AppleScreens = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			top.location = "../index.html#PricingApple";
		}
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(2));

	// Layer 5 copy 2
	this.button_3 = new lib.Symbol3copy();
	this.button_3.setTransform(273.6,309.4,0.422,0.422);
	this.button_3.alpha = 0;
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(4).to({_off:false},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(17));

	// Layer 2 copy
	this.instance = new lib.Symbol2();
	this.instance.setTransform(775.7,231.2,0.563,0.563,0,0,0,960.1,538.6);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:960,regY:540,scaleX:0.54,scaleY:0.54,x:775.6,y:232,alpha:0.111},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.222},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:775.7,alpha:0.333},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:775.6,y:231.9,alpha:0.444},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:775.7,alpha:0.556},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:775.6,alpha:0.667},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:775.7,y:231.8,alpha:0.778},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:775.6,alpha:0.889},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:775.7,y:231.7,alpha:1},0).wait(22));

	// Layer 10 copy
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(539.8,225.9,1,1,0,0,0,539.8,224.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleY:1,y:225.8,alpha:0.111},0).wait(1).to({scaleY:1,x:539.9,y:225.7,alpha:0.222},0).wait(1).to({scaleY:1,y:225.6,alpha:0.333},0).wait(1).to({scaleX:1,scaleY:1,y:225.5,alpha:0.444},0).wait(1).to({scaleY:1.01,x:540,y:225.4,alpha:0.556},0).wait(1).to({scaleY:1.01,y:225.3,alpha:0.667},0).wait(1).to({scaleY:1.01,y:225.2,alpha:0.778},0).wait(1).to({scaleY:1.01,y:225.1,alpha:0.889},0).wait(1).to({scaleY:1.01,y:225,alpha:1},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,97.2,1379.7,725);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;