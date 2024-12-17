(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.trebleclef = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgBsAn2QhRgKhbg1QgggTgSgRQgZgXgHgbQgIgdAPgcQgfgXgOgfIgJgWQgGgOgGgIQgGgIgNgLQgQgMgFgGQgcgfACg/QAChGAjg0QATgcAbgRQAcgTAggEQAIgcAbgUQAZgTAggGQAagEAkABIA+AFIAoADQAWACAQAFQAUAHAPANQAPAOAFASIADAXQACAOADAHQAEAIAIAIIAOAPQAfAhACA3QABAngOA5QgOA2gRAgQgTAigeAbQgeAbglAPIgDACQAXADAbgDQAcgCAzgMQBTgTAqgSQBIgfBAhEQA3g5ANg4QAGgXAAglIABg8QAAgKAHguQAFgigCgVQgCgngpheQgjhRAJgyIAHgcIADgOIgIgKQgPgVgKgfQgHgUgHgkIgGghIgMgBQhPgBghACQghAChaAMQhNAKguAAQhmAAhogpQhfglhZhDQhOg7hNhVQg8hChKhjQg9hSgig5QgvhQgVhJQgThFgEhUQgDhAAHhaQAVkoBSjUQAxh+BIhpQBMhwBjhPIBmhMQA9gvAhgnQAbghAohGQAqhIAYgfQAZggAkghQgHhJgLiGQgNirgghmQgHgZgbhGQgVg7gKgkQgQg+gEhQQgDg1ADhbQAChUAGgzQAIhKASg6QAmh2BbhaQBbhaB1gkQBzgkBVAlQBEAeAxBRQAeAzAmBpQAjBhALAjQAXBKAIA8QARBzgaCpQgrEOhsD0IhcDFQg2B1gWBXQgPA9gSAfQgaAugpAFIA+E+IAfCXQASBUATBCIAYBNIAtgHQB2gTBIAKQBVAMBQAyQBJAtA/BIQBCBMAtBcQAtBcASBkQAfCmgnDUQgLA5gNAmQgSAzgeAhQgQATgcAWIgvAlQgRAOgaAaQgeAdgNAKQhDA7hTAjQgqASgsALIABAHQAQAMALASQAWAlADA3QABAQgCA6QgBAuAFAcQAFAYARAuQASAuAEAYQAJAmgFA6IgIBhIgBBKQgBArgHAdQgKAogZAqQgUAggiAnQhWBkhXAyQhEAmh3AfQg8AQgpAGQghAFgeAAQgVAAgTgDgAiWrDQg3BWgSAaQgsA8gsAlQgUAQgsAfQgrAdgVARQgfAag0A9QgrAygTAbQgjAxgfBAQhCCGghCUQghCVAECWQAEC3A9B4QAVApAhAuQAVAdAqA0QBYBtA1A0QBVBSBWAmQBDAeBMAGQAjADAxgCIBSgFIDBgDIAWAAIgfi9QgbimgLhUQgTiLgFhwIgFhzQgEhDgIgwQgLAOgKASQgRAgggBDQgTAjgtBHQgiA/APAxQALAkAnAhQAXATAyAhQApAdAUAmQAYAsgTAkQgNAZgdALQgcALgdgEQgrgHg7grQhEgyh2hrQgtgpgUgYQgggngMgnQgLgoAHgxQAGglASgyQA6idBriAQBChQA/gTQAVgGAhgCIASAAQgkh7gnjGQg0kKgThPIgYhcQgRAAgQgJIgDAEgAE2EpQAIA3ADBTIAGCJQAGBmAcC4QAcC6AQBdIAPBPQBVgRAugnQAdgXAZgnQAQgZAYgxQAxhlASg7QAbhcgRhLQgMg2g1hVQg5hdgPgtQgMgvgIgXQgNgpgWgUQgfgdg5gEIhmAAIgmgBIAIAqgAgN82Qg2CSAAB7IAAApIANAnQAOAvAKA6QAGAoAHBDIARCpQBvi2Bdi/QAdg7ARgpQAWg4AKgxQAOhGgGhYQgDg8gQhiQgFgbgFgQQgJgWgPgMQgVgQgrADQg5ADgNgCQhUCjggBag");
	this.shape.setTransform(-3.2405,2.9619);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trebleclef, new cjs.Rectangle(-99.7,-252.3,193,510.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(18,1,1).p("EBerAI+MAAAg4iMjawAAAMAAAA4iIAATEIAATFEBerAI+IdbAAIAAUOIAASZEB8GAdMMj4LgBKEBerAI+MjawAAA");
	this.shape.setTransform(794.175,304.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EBBCAMpIAA5RINzAAIAAZRgAKzMpIAA5RINzAAIAAZRgA+jMpIAA5RINyAAIAAZRgEhO0AMpIAA5RINzAAIAAZRg");
	this.shape_1.setTransform(716.225,157.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eh8FAlOIAAzEMAAAg4hMDawAAAMAAAA4hIdbAAIAAUOgEBerASKMjawAAAgEA03gBJINyAAIAA5RItyAAgAhXhJINxAAIAA5RItxAAgEgqvgBJINzAAIAA5RItzAAgEha/gBJINyAAIAA5RItyAAg");
	this.shape_2.setTransform(794.175,245.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-9,-9,1606.4,626.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339966").s().p("ACXS5QgrhEgXhMIgKghQgHgSgLgLQgMgNgTgCQgTgCgKANQgKANAFAcQAGAjgCALQgHAqhJANQg9ALhOADQgsABhgAAIldgEQhfgBgyAFQhRAHg8AZQgqglgbg4QgZgzgLg9QgJg0AAhBQAAglADhRQACgegJgWQgKgbgWgCQgVgCgQAVQgMASgGAaQgtAMgyg0Qgyg0gehIQgbhEgGhOQgGhEAKhQQAIhAAThTIAGgdQACgRgDgMQgFgPgMgKQgOgKgNAEQgSAFgNAfQgfBLgMBUQgzAFgpgvQgjgogSg+QgYhVgKgWQgag6grgWIhFgYQgpgOgOgYQgSgjAYgyQAWgtAvgnQAkgeA6ggQCdhWD0hLQAhgKAUgRQAZgWgJgZQgHgTgagHQgUgEgdADQAXhqBJhQQAngrAlgJIAdgFQARgCAKgFQAOgHAGgOQAHgPgJgLQBRgPAtgVQBBgfAVg1QAKgbAChDQABg/AQgdQBXgLB+ARQCPAWBHAHQAiAEAVgBQAfgBAXgJQAcgKASgVQAUgXAAgbQBpgBB5AmQBWAaCCA8QAzAXAYAJQArAQAkAFQAuAFBagMQDXgcCQAHQDGAJCRBIQg6ADgbAhQgPATACAaQACAaATAMQARALAcgFIAwgNQBIgSBSArQA5AeBPBGICWCFQATARAJAKQAPARAFAQQAGAPACAiQACAhAHAPQAMAXAiAUQAvAcAJAIQAeAbAFArQAEAsgYAgQAGgkgmgXQgmgWgeAWQgVAPgGAeQgFAbAIAdQAFATAPAgQAQAjAFARQAKAhABAsQABAbgEA0QgIB1gIA5QgNBhgXBKIgSA1QgLAggFAWQgEASgFAgIgIAyQgNA9gcAzQgfA3gtAkIgeAZQgQAPgHAPQgHAPgBAiIgGDxQhKgKg3g2QgWgWgIgGQgSgOgSADQgZADgKAgQgHAVgBAmQgDBVgrAtQgmAng/ADQg5ADg5gZQgngSg6gqQhJg0gWgOQgpgYgaALQgLAEgKANIgRAYQgQAUgbAPQgTALggANQiFAziRAPQgcACgNAEQgWAFgNAMQgQAPACAWQAAAHADAGQgxgugkg5g");
	this.shape.setTransform(195.3126,139.4472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC/VjQgigYgagqQgPgZgbg0QgZgugagZQhMAshuAOQhFAJiEgBInLgDQgkAAgSACQgfADgWAJIggAPQgTAJgOACQg6AIg2hPQg5hTgahjQgahkAKhkQhOgKhCg2Qg/gzgmhLQg9h8AGi+QgpABgpgUQglgTgeghQgxg3gahgQgOgxgEgMQgNgggVgTQgTgRgqgOQgwgQgRgLQgogbgNg0QgNgyAQgwQAahPBfhJQBXhDB+g4QBLgiCcg3QgWhEAxheQAyhgBWhHQBXhHBogfQAogLAMgFQAbgMANgTQANgTACgeQABgSgBgkQAAgmALgfQANgkAbgTQAagUAqgEQAbgDAwAFIGfAoQgFgaASgaQASgXAcgKQAYgIAfABQAUABAkAGQBSANAwALQBGAQA3AVICFA9QBQAlA5AIQAvAGA/gGIBvgPQEHgjECBDQBHASAtAfQA5AoAGA4QBNARBbA+QBnBNA0AjQBPA3AWATQAzAuAMA0IAHAxQADAdAKARQAKAQAVAQQAZARAMAJQAzAoAPBFQAOBFgfA6QgIAOgTAbQgTAagIAQQgSAkgDA1QgBAQAABOQABBpgXCCQgOBPgkCaQgXBggQAwQgbBOgmA2QgTAbgqAzQgiAugKAnQgHAeAEAvIAGBOQAAAsgQAiQgTAogjALQglALg0gbIhZgtQgHBAgeA1QghA5g0AbQgyAbhBgDQg6gCg7gZQgtgTg9gmIhlhAQjGB7jnAiQAFAdgWAaQgVAZgfAEIgOABQghAAghgXgADrUZQgCgGAAgHQgCgXAQgOQANgNAWgFQANgDAcgDQCRgOCFg0QAggMATgLQAbgQAQgUIARgXQAKgNALgFQAagLApAZQAWANBJA0QA6AqAnASQA5AaA5gDQA/gEAmgnQArgsADhWQABgmAHgVQAKgfAZgEQASgCASAOQAIAFAWAXQA3A1BKALIAGjxQABgiAHgQQAHgPAQgPIAegYQAtglAfg3QAcgzANg9IAIgyQAFgfAEgTQAFgVALggIASg1QAXhLANhgQAIg6AIh0QAEg1gBgaQgBgsgKgiQgFgQgQgjQgPghgFgTQgIgdAFgaQAGgeAVgQQAegWAmAXQAmAWgGAlQAYghgEgrQgFgsgegbQgJgIgvgbQgigVgMgWQgHgQgCggQgCgjgGgOQgFgRgPgQQgJgKgTgSIiWiFQhPhGg5gdQhSgrhIASIgwAMQgcAGgRgLQgTgMgCgbQgCgaAPgTQAbggA6gEQiRhHjGgKQiQgGjXAcQhaAMgugGQgkgEgrgQQgYgJgzgYQiCg7hWgbQh5gmhpACQAAAagUAXQgSAVgcALQgXAIgfABQgVABgigDQhHgHiPgXQh+gQhXAKQgQAegBA+QgCBDgKAcQgVA1hBAfQgtAVhRAPQAJALgHAPQgGAOgOAGQgKAFgRADIgdAFQglAJgnAqQhJBQgXBrQAdgEAUAFQAaAGAHAUQAJAYgZAWQgUASghAKQj0BKidBWQg6AggkAeQgvAngWAuQgYAyASAiQAOAZApAOIBFAXQArAWAaA7QAKAWAYBVQASA9AjAoQApAwAzgGQAMhTAfhLQANggASgEQANgEAOAKQAMAJAFAPQADANgCAQIgGAdQgTBTgIBAQgKBQAGBFQAGBOAbBDQAeBJAyAzQAyA0AtgLQAGgbAMgRQAQgWAVACQAWADAKAbQAJAVgCAeQgDBRAAAlQAABCAJAzQALA+AZAyQAbA4AqAlQA8gYBRgIQAygEBfABIFdADQBgABAsgCQBOgDA9gLQBJgMAHgrQACgKgGgjQgFgcAKgNQAKgNATACQATABAMANQALALAHASIAKAhQAXBMArBEQAkA5AwAvIAAAAg");
	this.shape_1.setTransform(195.3264,140.1974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAnQgOgBgJgIQgGgEgEgHQgHgNADgNQACgLAKgJQAKgIAMAAQAEAAAAgDQAMAAALAIQAKAIADAMQAEALgFAMQgEANgKAGQgJAHgMAAIgBAAg");
	this.shape_2.setTransform(374.0566,57.9517);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009966").s().p("AQSSiQhPgig4g+QgRgTgHgFQgOgMgOgDQgPgCgPAIQgPAIgFAPQgGAOAGAQQAFARAOAIQjiAujjgTQgggCgPgLQgRgNgDgcQgCgSAEgiQADgdgGgWQgIgcgWgHQgNgEgSAFQgLADgTALQiRBOijAbQhTAPgwgUQgUgIgigXQgjgYgTgIIgzgPQgfgJgQgOQgNgMgRghQgRghgNgMQgagZgpAIQgoAJgOAhQgPAiAWAjQAWAjAkACQj6BOjqgqQAJgOgNgQQgOgQgTgBQgLAAgZAEQgXAEgNgCQgbgDgPgaQgQgaAJgZQAGgSARgPQAMgLAWgMQAZgOAKgIQASgOAJgQQAKgSgGgWQgGgXgTgEQgMgEgPAGIgZAMQhGAjhBgOQgjgHgbgWQgdgXgMggQgLggAFg6IAQhyQAIhDgIguQAagBANgcQAMgagHgcQgEgSgRgfQgRghgFgQQgIgcAKgaQALgdAZgEQAGAAARABQAPABAIgDQAMgEAHgOQAGgOgCgOQgCgMgHgOIgNgZQghg7gOhEQgPhDAGhEQAOASAZgKQAZgKAGgYQAEgUgIgZQgFgOgPgdQhZisgTjCQgEghAJgZQALgfAZgDQAQgCAgAQQAeAPAQgGQAPgFAJgSQAFgKAHgZQAWhRA/g+QA+g+BRgWQgEAbAeAQQAaAOAjABIC/AKQAkACAUgBQAfgCAXgJQAqgRAYgrQAXgsgJgtQAzguBMgMQBGgMBIAUQB2AiB2B4QATAUAIAHQAQANAQAEQAaAHAhgPQAMgGArgbQBOgyBJABQAqABAlASQAmATAVAhIARAcQAKARAMAGQAUAKAXgLQAWgLAKgVQAIgTABgZQABgQgDgeQAqALAgAfQAhAfANAqQAIAfAFAPQAKAaARALQAeATA4giQBBgpAcACQAkACAWAmQAUAjgDApQgCAeABAJQADAVANAKQAOAKAhgEIC7gWQAgBmADBsQAEBrgZBoQgGAZgBAKQgDATAFAPQAEASAQALQAQALAQgHQAPA0gTBuQgTBsAQA0QAGATAUAnQASAlAGAWQAKAogLA3QgDAOgXBQQgkB8AvA/IAaAdQAQARAFAOQAIAYgMAgQgHASgTAjQgNAeAEAeQAFAhAaAHQgMAuATAuQATAvApAYQgJAWgcAOQgPAIglALQgfAKgUAPQgYATgBAZQgBAJAMAnQAIAcgLAPQgMAQgiAAIgHAAQhQAAhLggg");
	this.shape_3.setTransform(521.626,131.3317);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("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");
	this.shape_4.setTransform(522.6394,131.4596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,672.6,280.4), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao5SRQg9AAglgCQg1gDgsgIQhZgQiJg+QkkiEkGirQCLg1BFgiQAngUAjgWQAIAGAKAEQAqASAmgRQAHAlAgAYQAhAYAlgFQAPgBAXgJIAlgNQATgFAZgBIAtAAQHsAJHch2QBSgVA2gTQBJgaA2gjQBZg8BBhhQAqhAgIgtQgHgogpgTQgqgUgjAUQgVALgWAdIgkAwQgTAVgeASQgVAMgjAPQjDBUjtAkQjKAgj4gBIh7AAQhFACg0AIIhDALQgmAFgcgDQgKgCgogLIAkgvQA+hSApglQAjghA2gkIBfg8QEti+DkkQQBehxATgVQBEhHBDgiQATgJArgRQAqgQAUgLQAkgTAsgjIBKg/IB9hiQBMg6ArgtIBKhVQAsg0AjgbQBVhDCbgdQB+gYCfgEQBjgDC9AGQAlCEAHBNQALB2goBVQgmBQhtBWIhcBHQg1ApggAiQgrAtgmA/QgeAvgjBIQhbC3hGC/QglBngHA/QgFAsAHByQAFBlgNA4QgOA/gpA6QglA2g3AsQgwAnhBAiQgyAahIAfQhOAfgeALQiRA3h8AcQiOAhiwAMQh6AIi2AAIgUAAgAUsw/QghADgWAVQgWAUgEAgQgEAgAPAaQAQAaAfALQAeALAdgKQAlgNAPglQAMgbgJgfQgJgfgZgSQgWgPgbAAIgIAAg");
	this.shape.setTransform(197.4092,135.2373);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnFVIQhhgChNgMQhygSh+gwQhkgnh/hCQhFgjiIhLQh5hAhYglQhjgqhngcQg5gQgfgTQgtgcgDgpQgEgoAmgiQAfgaAygSQA3gTBfgZQB1geAjgLQCwg1BdhWQAngkA3hKQA/hUAbgdQA1g5Bag7QBphCAzgiQDMiFCji3QAzg5Bjh3QBZhjBPg1QAhgVA2gcIBYguQCmhbCzi4IBihlQA5g5AygiQBfhCCGghQBogaCUgLQCLgKEWgBQAlAAAWADQAhAFAWAOQAfATARAqQANAdAJAxQAVBpAHBKQAJBigJBSQgKBeglBRQgnBXhAA6QgWATgnAbIg+AtQgiAbgmAnQgvAugjAvQgaAigbAvQgOAZggA7IgzBiQgbA4gSAuQhCClgHC1IgCBuQgBBBgJAsQgbCOh6B+QhfBjigBeQhhA5hBATQgVAGgdAGIgzAKQgyALhZAbQhgAdgrALQhmAYiCALQhRAGicAEQhXADg3AAIghgBgAy6KwQhEAiiLA1QEGCrEjCDQCJA+BaARQArAIA2ADQAlACA8AAQDDAACBgJQCvgMCQggQB7gdCRg2QAfgLBNggQBJgeAxgaQBBgjAwgmQA4gtAlg1QAog7APg/QANg4gGhkQgGhzAFgsQAGg+AmhoQBGi/Bai3QAkhIAdgvQAng+AqgtQAhgiA1gqIBbhGQBthWAmhQQAohWgKh1QgIhNgliFQi9gFhiACQigAFh9AYQibAdhVBCQgjAcgtAzIhJBVQgrAthMA7Ih+BhIhKA/QgrAkgkATQgVAKgpAQQgrARgUAKQhDAhhEBIQgTAUheBxQjjEQktC/IhgA8Qg1AkgkAhQgoAlg+BSIgkAvQAoALAJABQAdAEAmgGIBCgLQA1gIBFgBIB6AAQD5AADKgfQDtglDChTQAkgQAVgMQAdgRATgVIAlgwQAVgdAVgMQAkgTApATQApAUAIAoQAIAsgqBAQhBBhhaA8Qg2AjhJAbQg1AThTAUQncB3nrgJIgtAAQgZABgTAFIgmANQgWAIgPACQglAEghgYQghgYgHgkQgmAQgpgRQgKgEgJgGQgiAWgoAUgAWTuUQgegLgQgaQgQgaAEggQAFggAWgVQAWgVAggCQAggDAZASQAZARAJAfQAJAfgLAcQgPAlgmAMQgOAFgOAAQgPAAgQgFg");
	this.shape_1.setTransform(184.7727,135.2589);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Aj+DhQAIhAABgaQACgfgCipQgBhcAKhDQAYASAWAfIAfAuQASAbAOARQAhAkA0AbQAnAVA7ARIBmAgQA6AUAnAYIj9BYIhBAWQgmALgdAFQgmAGgzABIgjAAg");
	this.shape_2.setTransform(395.95,43.5125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnUGlQgbgEgSgMQgTgMgKgUQgLgUAAgWIAAgJIAAgRQAAgRADgXIAHgnQAMhNgCjNQgBiBAOhYQgOgQgFgTQgGgVAFgXQAGgWAQgQQAZgaAxgFIAZgBIAWABQAVABAVAGQAsAKAoAZQBGAqA6BTIAbAmQAQAUAQAMQAQALAZAJIArANQA6AQCYBCQCCA4BSANIA2AKQAeAIASAPQAZAUAEAjQAEAjgUAaQgOAUgcANQgRAIgjALQi9A4kuBrQhiAjg0AKQgwAKg+ADQgiABhNAAQgfAAgSgCgAlig1QACCpgCAfQgBAagIBAIAjAAQAzgBAlgGQAegFAmgLIBCgWID7hYQgmgYg6gUIhlggQg8gSgogUQgzgbghgkQgOgRgTgbIgeguQgWgfgYgSQgKBDABBcg");
	this.shape_3.setTransform(406.8562,42.3125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,462.3,270.5), null);


(lib.guitar_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgODlQgMgDgJgMQgHgLgCgOQgBgLACgQIAFgaQAEgYABggIAAg3IgDisQgBgqALgSQAJgOAPgGQAPgGANAJQAQALABAlIADClQAABbgEBIQgDAkgJARQgHANgMAHQgJAFgIAAIgIgBg");
	this.shape.setTransform(30.5494,45.7565);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah9AoQgjAAgMgPQgJgMAFgRQAFgQAOgJQATgLAsAAIDLABQAXABAMACQATAFAJAMQAJAMgDAPQgDARgMAIQgMAIgeAAg");
	this.shape_1.setTransform(29.8617,24.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYEOQgJgMAAghIAAiSQgcAAgfgHIgBCQQAAAggKANQgKAOgUAAQgTAAgKgOQgKgNAAghIgBjvQAAg9ADgeIAFgyQAHgrAHgRQALgbAYgQQAagSAbADQAkADAsAtQAfAhANAaQAGALAEAPQAIAbgCA1QgCAzgZAOIgTAHQgKAFgCAIQASAKAGAYQAEAOAAAdIgBCFQAAAhgJANQgLAOgUAAQgUAAgKgPgAgQjGQgMAAgEAPQgCAIAAAOQAAAPgBAGIgHAWQgEAPABAVQAAAdACAXQAbgbAngGQAOgCAFgGQACgDABgLQABgagFgOQgCgIgJgOQgMgSgRgVQgIgMgJAAIAAAAg");
	this.shape_2.setTransform(-2.48,43.1344);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAsQgbAAgLgGQgPgJgDgTQgDgTAMgMQAJgJARgEQAKgDATAAIAogBQAXgBASgCIAUgCQALAAAHADQANAGAGAOQAFAOgDAOQgDAUgNAJQgKAHgaAAg");
	this.shape_3.setTransform(-36.4771,61.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQEmQgLAAgKgIQgJgHgEgMQgHgPABgeQADg7AJgpIAWhKQANgtADgdIADg4QABgWAFgWIAIgrQAEgaAAgSIABgnQACgWANgLQAJgIANAAQANgBAKAHQAMAJAJAdQAWA/AyBgQA/B2AQAlQANAdAIAXIALAkQAGAVAHAOIAKAUQAFAMADAIQAGAbgNAPQgJAKgPACQgOABgNgHQgUgLgNgfQgIgSgIgfIgNgyQgHgWgWguQglhPgphLQgIAKgBASIAAAeQAAAigPAuIgXBLQgMAsAAAhIABAcQAAARgDALQgEAPgKAKQgLAKgNAAIgBAAg");
	this.shape_4.setTransform(-34.626,47.3744);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAErQgQgDgKgQQgHgLgEgUQgHgmAAhMIAAl1QAAgjAMgNQAJgLAQgBQAPgCALAKQAKAJAEARQACALAAAUIAAF9QAAAbACANIAHAtQADAcgKARQgGALgKAGQgIAEgJAAIgEAAg");
	this.shape_5.setTransform(-70.549,51.8802);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABqAtQgwgKhFgCIh5gBQgZAAgPgGQgXgJgDgTQgCgNAJgNQAIgLAOgGQASgGAmACIB+ABQBLABAyAKQAdAHAOALQAKAHAFALQAFAKgDALQgDANgLAIQgLAIgOACIgGAAQgPAAgggGg");
	this.shape_6.setTransform(-70.0855,23.739);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUEwQgOgCgKgHQgLgGgFgMQgGgMACgNQACgNAJgKQAJgKAMgCQAKgCAbAEQAvAHAtgTQAQgHAGgKQAHgJAAgUQABgggIgOQgHgOgXgMQgXgMglgMIg9gUQhRgfg3g/QgTgUgIgUQgIgVgCgdQgDg0APggQANgbAcgTQAZgSAggIQAbgHAjgCIA+gBQAkAAAOALQAMAKABASQABASgMALQgOAOgkAAIg3AAQghABgXAGQgdAJgKATQgGALAAAZQAAAUAEAJQADALANAOQAnAqA0AWIAlANIAmAMQArAOAlAVQAhATAMATQAMARAFAaQACAQABAfQAAAagBAOQgDAWgJAPQgJAOgQANQgLAIgVALQgdAQgWAGQgRAFgWABIgpABQgQgBgJgBg");
	this.shape_7.setTransform(-107.4937,52.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA7AxIiAgSQgTgDgLgEQgPgGgGgMQgFgKAEgNQAEgMAKgIQARgOAeABIAYADIAZAEIAtAEQAdABARAFQAcAIALASQAIANgGASQgGARgPAHQgIADgNAAIgUgCg");
	this.shape_8.setTransform(0.3352,-22.2441);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBEUQgSgBgKgNQgKgNAAghIAAmtQAAgmAOgOQAIgJAPgBQANgBAKAIQAMAJAEASQADAMAAAVIAAGlQAAASgCAKQgCAPgJAJQgLALgQAAIgBAAg");
	this.shape_9.setTransform(10,-20.4796);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVEaQgMgMgBgcQgBgNABgUIABghQABgegEgYIgGgoQgDgZAAgzIABjxQAAgdAIgNQAKgOASgBQARgCAMAMQAJAJADAQQACAKAAATIAADkQAAAtABAOIAGArQAGAwgEBYQgBAegKAMQgJANgSAAIgCAAQgPAAgKgLg");
	this.shape_10.setTransform(-10.495,-20.6798);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah6D9QgMgHgEgPQgEgPAGgMQAJgTAegGIAXgDIAYgBQAcgDAVgMQANgIAXgVQARgRAEgJQAEgKAAgPQAAgQgGgLQgHgMgXgMIg5giQgggVgVgVQgPgQgFgMQgGgOAAgbQAAgcAEgRQAEgWAWgpQAKgTAJgHQAJgHAPgBIAagBIAaAAQAPABAJAGQAKAGAFAKQAFALgBALQgBALgIAJQgHAJgKADQgEACgXADQgPACgHAIQgGAGgDAPQgGAcAHAOQAEAIAJAIIARALQAnAVAfAUQAZAPAMANQAhAjgDBCQgDAzgXAZQgLAMgaARIgaAZQgZAVgmAJQgdAGgrABIgFAAQgWAAgLgHg");
	this.shape_11.setTransform(-33.8389,-22.2194);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhXEgQgLgGgNgVQgSgdgIgPQgOgagFgWQgEgUAAgqQAAgsAEgWIAGggQACgQAAgiQACgWAHghQAIgmAHgRIAJgWQAFgNABgKIAAgsQgBgaAKgOQAJgKAOgDQAOgDALAHQAWANADAkQACAhgOAyIgRA7QgJAigCAaIgCArIgGAxQgEAfgBARQgCA7AZAjQAIAIAGABQAHAAAIgIQAZgWAUgbQARgWAIgRQAMgcAHg4IANhnQAJhHgCgkIgCgYQgBgPACgKQAFgdAVgJQAKgEAMACQALADAHAIQAKALADAcQADAegBAjQgBAvgLBTIgMBcQgHAtgGARQgKAcghAuQghAqgYATQgjAegnAEIgKABQgQAAgLgHg");
	this.shape_12.setTransform(-65.9875,-17.5807);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhbENQgNgCgIgJQgJgJgFgZQgPhKgCghIgChOQgBg7ACgWQAEguAPggQAJgRAVgeIAuhCQAQgWALgHQAKgFAZgCQAZgBAMACQAVACAOAIQAPAJAOAUQAWAeAHAbQAIAjgOAcQgJARgYAVQgpAkglASQgvAVgsgEIAAAyQgBAfACATQABATAFAZIAIArQAFAcgBAPQgEAZgSAKQgHAFgJAAIgHgBgAASi4QgIACgGAHQgGAHgHAPIgNAYIgTAXQgMAOgCAMQAsgMAjgTQASgKAJgIQAKgKABgJQABgJgIgOQgGgKgFgDQgEgCgJAAQgIAAgFACg");
	this.shape_13.setTransform(-96.3979,-20.2853);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(11,1,1).p("ANwAAQAAFtkCEBQkCEClsAAQlsAAkCkCQkBkBAAltQAAlsEBkCQECkBFsAAQFsAAECEBQECECAAFsg");
	this.shape_14.setTransform(-45.95,21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AptJuQkCkCAAlsQAAlsECkBQEBkCFsAAQFsAAECECQECEBAAFsQAAFskCECQkCEClsAAQlsAAkBkCg");
	this.shape_15.setTransform(-45.95,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.4,-72.5,187.10000000000002,187);


(lib.characterhead = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgPQAOgNATAAQAUAAAOANQAOAPAAATg");
	this.shape.setTransform(-61.55,-100.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AJCB7QguALg2AAQhpAAhKgoQhKgnAAg3QAAg3BKgnQBKgnBpAAQBoAABKAnQBKAnAAA3QAAAHgBAGAjgAAQAAA3hKAnQhKAohpAAQhoAAhKgoQhKgnAAg3QAAg3BKgnQBKgnBoAAQBpAABKAnQBKAnAAA3g");
	this.shape_1.setTransform(-22.5,-104.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AqAIGIgHhFQgMhfgfi0QgRhmgRg3QgHgVgSgvQgRgsgIgYQgYhPAAhQQCMg7C1g3QBxghDrg+QCqgsBFgOQBEgOCSgYQBsgRBEgNQAJBCASBKQAUBVA0CmQApCEAWBAQAlBrAlBUIAYA3QANAgAIAZQAFASAJAuIAEATQhRAOh8AbQhvAYiQAiIgnAJQlbBTjLAWQhLAIiUALIgSACQhOAHhBANQgCgugEgyg");
	this.shape_2.setTransform(-27.175,-214.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AErBfQhKgnAAg4QAAg3BKgnQBKgnBpAAQBoAABKAnQBKAnAAA3IgBANQgFgggZgaQgfgegrAAQgsAAgeAeQgfAgAAAqQAAAsAfAeQAMANAPAHQguALg2AAQhpAAhKgngAqPBfQhKgnAAg4QAAg3BKgnQBKgnBoAAQBpAABKAnQBKAnAAA3QAAA4hKAnQhKAnhpAAQhoAAhKgngAm1AnQgBAUAOAOQAPAOATAAQAVAAAOgOQANgOAAgUQAAgUgNgOQgOgNgVAAQgTAAgPANQgOAOABAUIAAAAgAmoBJQgOgOABgUQgBgUAOgOQAPgNATAAQAVAAAOANQANAOAAAUQAAAUgNAOQgOAOgVAAQgTAAgPgOgAlWAnIAAAAg");
	this.shape_3.setTransform(-22.5,-104.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCCCC").s().p("AmGX0QhJgBgkgFIgXgDIAAhPQAAgkgCgSIgHgmQgBgPgBgUQB5AqCbgBQCHgBDigqQB/gXBigVQgBAQADAVIAKAwQAUBcgEBdgAk1SNQiAgGhSgmQgTgJhCgnQg0gfgkgLQgegJg/gMQg3gOgagcQgYgZgIgrQgGgdAAgyIABhDQBdgdBchAQBehCBihtQA5g/AWgUQAwgrAvgPQAkgMA3AAQA+ACAegBQA0gBAogPQAvgSAWgkIAHgOQAHANAMALQAuAqBhAAQBAAACDgPQBzgIBJAdQArAQAsAjQAgAYAsAsQBFBFBPBaQgPBEgWA7Qg7CihkBKQg0AmhPAZQgoAMhoAXIlZBLQilAeiFAAIgygBgAs/oyQAJhUAAgqQAAghgFg1IgIhXQgKipA+i0QANgmAQgnQBigVBwgRQFhgvCugeQC5ggDlg5ICdgpIAGAFQAjAdAXAdQAfAmAhBEQAuBhAJAPQAMAVA3BSQAqA/ARAsQAUAxAHBAQAFApACBMQANHLgJHUQgCBfgEBNIgSgSQiYiaiagoQhSgVh6ADQiKAJhFABQg0AAgVADQgpAGgZATQgYATgJAcQgLgRgRgLQgZgRgkgGQgZgEgrAAQhngBg9AIQhaALhCAgQg5Acg6A2QggAehEBKQhwB7hUAtQANogA4n+gAJBvAQArAAAfgfQAfgfAAgrIgBgQIABgNQAAg4hKgnQhKgnhpAAQhoAAhKAnQhKAnAAA4QAAA3BKAnQBKAoBoAAQA3AAAugLQAVALAaAAgAq/ylQhKAnAAA4QAAA3BKAnQBKAoBoAAQBpAABKgoQBKgnAAg3QAAg4hKgnQhKgnhpAAQhoAAhKAng");
	this.shape_4.setTransform(-17.6866,5.1875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(-22.0338,-63.4008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.characterhead, new cjs.Rectangle(-204.9,-303.8,365.8,480.9), null);


(lib.characterbody = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("A6GNrIAhgVIGakCIQkqcIBshDIAOgKIZhwGI68RyIwPKsIm2EhIgQAKAY9xnI6UR5IrdHyIk0DKIksDEIiJBUIgWANAZbw0I6WR2IweLJImJEKIgrAeAaHu7I6LRsIx5MHIi3B8Ih2BQIgBAAIgjAYAZ1v8I6TRzIw8LeIlEDbIhQA3");
	this.shape.setTransform(-1.75,-60.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000CC").s().p("AgQRtIjOgaIAtgyQA5g3A3gVQAvgTBGgCQBSABApgBQApgCAfgPQAqgDA8gBQAtAAAkgDQgFB3AHBVQhNALhfAAQh7AAiZgSgA6zgWQBKiTAogvQAdggAugkIBSg8QCHhiB9h7QBJhIAhg1QANgVAkhLQAdg8AaggQALgOAvguQAagaAQgWQASBVgJBfQgDAggIAxIgMBQQgJBBgDBNIgHAIIgcAlQgrA3g6AoIgxAiQgaAVgKAXQgDAJgCAJIgUAKQhoA5gbAQIhYA0Qg1AfgmASQhvA0icAZIAIgQgArKjdQgJh5ADhiQAGgNACgMQAFgXgJgWQAIhvAUizQANi/gmiCIC7gIQAugBAWABQAmACAcALQAPAFAZAOQAcAPAMAFQAxAWBOABQBlAAC6gsQDDguBdgDIACANIBDIdQgrgOgqgDQhAgFgiAaQgVAQgFAaQgDANACALQg9AOg7AXQhwArhgBEIhzBYQhFA1g0AZQhSAphxAOQhHAJh+AAIgHhMgAI9xrQBAAACpgIQCbgHBgANQAXADA/AMQA2AJAgADQBhAKCXgWQDQgdAngDIkkCrQgYAOgLAJIgCACIgegFQhUgHioABQizAAhDADQiKAFhrARIgfAGQgMhlgGhgg");
	this.shape_1.setTransform(-84.1375,-37.2391);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ArqOPQhjgBg2gLQhTgQgygtQgjgfgZgzQgTgmgSg7QhklLBYjkQAkheBKhdQA4hGBfhbQAiggBmhdQApgmAYgOQAjgVAygKQAOgMAbgCQAmAAARgBQArgGAVgCQAkgCATAQQB/gDBcgRQCagcBphJQAegVA3guQA3gvAdgUQBIgzBmgkQBHgZB3gdQAbgGAOgFQAWgIAOgMQAKgIAGgKQAPAGAQAIIACAOIACAVQAWADAYALQBGAgA7A3QAPAPAPAQQAaAbAXAgIADAEQARAYAHATIABABQAQAZAOAdQAOAbAMAfIAHASQAYBBAbBpQAbBnAAA9QABBCgYBLQgSA5glBNQgYAxgVAdQgcAogjAWQgPAJgWAJIgDAFQgSAVguACQg6ADgRAHQgKAFgQAMQgRAOgIAEQgZAOgggCQgUgBgSgHIg5gBQh5AAhwATIgPADQgvABggADQhZAIhAAgQg1Aag3A0QgRAQgkAnQgHAVgUAbQgrA6gZAbQgpAsgsAVQgJAEgkANQgcALgQAJQgQAJgYAWQgbAXgNAJQgXAPgZAEIAAAAQgyAUgyAKQgxAKg+ADIg7ABIg1AAgAtkDOIEjHiIDliLIgjg6IAjgXIgjAXIggg1IBQg2IhQA2Igfg0IArgdIgrAdIgmg/IgqhFIgphEIhHh3gAlcHUQgCAMAHANIgEgZIgBgCIAAACgAlbHUIB2hQgAnLg7QhOBMAABtQAAAUADAUQAGApASAkQASAkAdAfIAEADQAaAaAeASQAgATAkAIQAeAHAhAAQAWAAAVgDQBSgNA+g+QAXgXAQgaQAcgtAHg2QADgTAAgUQAAgSgCgRIQcrJIwcLJQgEgggMgdIE0jKILcnyIrcHyIk0DKQgQgogegjIQNqsIwNKsIgNgOQgTgTgUgOIQjqcIwjKcQhBgthTAAQhuAAhNBOgAnkFDIAVgNgAguEIIR4sGgAoOD+IAQgLgAo3C6IAhgUgAgLClIQ7rdg");
	this.shape_2.setTransform(-112.0161,8.0075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(-5.4594,-71.4661);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.characterbody, new cjs.Rectangle(-287.5,-255.5,564.1,368.2), null);


(lib.bassclef = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAXJAmKQgggIgwgVQhDgehZguIiahSQgtgYi5heQiNhIhXgwQhyg+i3hvQi9hzhohIQichthwhtQgrgqiJiWQhvh5hNhAQg7gxiyh1QiZhlhMhLQgagagzg1QgugsgqgUQgPgIgggNQgbgOgNgRQgMgSgEgdIgDgzQgFh3hjizQhEh8gJgSQgqhSgRhEQgKgngIhCQgLhSgFgYQgFgfgNgzIgThSQhWmYD4oMQAshaAshPQBIiCBEhTQA+hNBchSQA6gzBzhaQBchJAzgjQBSg5BJggQBggqCAgVQBSgNCXgLQClgLBfgBQCRgBBzARQCzAaCmBMQCVBECPBwQCKBsBxCJQBxCIBSCcQCJEGgwDBQgGAYgQAsQgQAugGAWQgGAVgJAtQgIArgGAXQgZBchABQQg9BNhVA2QiYBhjaAXQguAGheAFQhAADgegIQgwgNgegpIgUgcQgLgRgLgJQgQgNgdgFIgzgJQhMgQg8hPQgqg2gshnQgchCgKgjQgRg5AGgwQAIhMBEhNQAMgOB3hwQAhgfBBhBQA6g1AzgZQBQgnClgGQCxgFBJgcQg0gpiXigQh7iChfg0Qh9hEiegBQiSAAiRA4IhgAmQg4ASgsgEQgSgBgegIIgxgLQgpgGgmAHQgpAJgeAYQgdAXgWAsQgLAVgXA7QggBVgoBQQgCARgDAOQgJAqgYAaQgMAOgQAGIgoBGQgdA3gMAuQgIAggDApQgBAYgBAyQgBBdABAuQACBNAJA+QAIA9AVBVIAlCQIAaBzQAQBFANAtIAfBiQATA9AKAmQAJAjAQBWQAPBNANArQATBDAlBPQAWAvAxBcQAoBLAXAmQAkA9AjAuQAXAeArAwQAxA3ASAWQAXAcAjAwIA2BNQBWBxCTCOQCgCZCqCIQAiAbAOANQAaAYAPAXQASAcAFAeQAFAigNAbQCBBqCtB3QBoBHDSCIIEJCqQAjAXASARQAbAaAFAdQAIApggAjQgeAigrAIQgOACgQAAQgZAAgdgHg");
	this.shape.setTransform(-47.5989,-7.1203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bassclef, new cjs.Rectangle(-214,-252,332.8,489.8), null);


(lib.basicstring = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Aak7GMg1HA2N");
	this.shape.setTransform(169.975,173.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQad7daq6w");
	this.shape_1.setTransform(169.975,173.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQaW7zax6a");
	this.shape_2.setTransform(169.975,173.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQaP8Ka46D");
	this.shape_3.setTransform(169.975,173.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQaI8ha/5s");
	this.shape_4.setTransform(169.975,173.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQaB83bG5W");
	this.shape_5.setTransform(169.975,173.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQZ69ObN4/");
	this.shape_6.setTransform(169.975,173.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQZz9kbU4p");
	this.shape_7.setTransform(169.975,173.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQYL4yc89b");
	this.shape_8.setTransform(169.975,173.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAWjgT/AekgiO");
	this.shape_9.setTransform(169.975,173.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAU7gPMAgMgnB");
	this.shape_10.setTransform(169.975,173.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUATUgKZAhzgr0");
	this.shape_11.setTransform(169.975,173.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUARsgFnAjbgwm");
	this.shape_12.setTransform(169.975,173.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUASfgHkAiogup");
	this.shape_13.setTransform(169.975,173.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUATTgJhAh0gss");
	this.shape_14.setTransform(169.975,173.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAUHgLeAhAgqv");
	this.shape_15.setTransform(169.975,173.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAU6gNbAgNgoy");
	this.shape_16.setTransform(169.975,173.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAVugPYAfZgm1");
	this.shape_17.setTransform(169.975,173.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAWigRVAelgk4");
	this.shape_18.setTransform(169.975,173.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAXWgTSAdxgi7");
	this.shape_19.setTransform(169.975,173.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(4,1,1).p("A6jbHUAYJgVPAc+gg+");
	this.shape_20.setTransform(169.975,173.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQY93McK/B");
	this.shape_21.setTransform(169.975,173.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4,1,1).p("A6jbHQZx5KbW9D");
	this.shape_22.setTransform(169.975,173.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,344,351);


(lib.arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AibALQgVgHgJgEQgRgIgJgMQBkgYBZguQAjgSASAAQAUAAAdAOQBCAiBCAtQgwAugwBBIgJAOQiAg2iGgtg");
	this.shape.setTransform(56.25,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AhVC5QgLgNAAgKQABgHAMgOQAcgkgDg0QgDgmgVglQgUghghgcQgWgTgdgRQAhgqArglIAQgOQAUAJARAGQBLAYBbgiQAdgKANADQAVAFAPAkQgRATgFAfQgDAUAAAlIABBCQgUgCgXAFQgUAHgRAOQgQAPgJAVQgHAVABAWQgWgDgXAIQgVAHgRARQgQAQgGAWQgIAXADAXg");
	this.shape_1.setTransform(102.55,62.2813);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AEdIPQgogBglgRQhAgdg4hJQgpg2gPg3QgRhBAYgzIAHgQQADgKgCgHQgEgMgUgJQgkgRhRgfQihg+hzgxQiUhBh4hCQgegRgPgNQgXgTgIgWQgMghATgkQARgiAigTQAcgPApgIIBIgKQCwgWBrhJIAlgYQAWgNASgEQAbgGAgAKQAXAHAiASQB2BABwBTQAsAhAXAMQAoAVAjAAQASgBAagHIAsgLQAogIAoAJQAoAKAhAXQAXARAXAcQAPARAYAjQAXAhALAVQAQAgAAAcQABARgHAfQgIAfAAAPQgBARAFAXIAJAnQARBEgJApQgHAdgSAVQgTAXgaAGQgNADgagCQgbgBgNADQgiAHghAmQgXAbgoA7QgmA0gmATQggARgoAAIgEAAgADDhnQgrAmggAqQAcARAWARQAhAcAUAiQAWAlACAnQAEA0gdAjQgMAOgBAHQAAAKAMANIAbAfQgEgXAIgWQAHgXAQgQQAQgQAWgIQAXgIAWADQgBgWAIgVQAIgVAQgOQARgPAVgGQAWgHAVAEIgBhDQgBgkAEgUQAFgfAQgUQgPgjgVgFQgNgEgcALQhcAhhMgYQgRgFgTgKIgRAOgAizksQhYAuhkAYQAIAMARAIQAJAFAVAHQCGAtCBA1IAJgNQAvhCAwgvQhBgthCghQgdgPgTAAQgTAAgkATg");
	this.shape_2.setTransform(71.9092,52.7051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(0,0,143.9,105.4), null);


(lib.motiongoose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(23.6,-19.25,1,1,0,0,0,231.1,135.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.2369,x:23.65,y:-23.5},0).wait(1).to({rotation:-6.4739,y:-27.75},0).wait(1).to({rotation:-9.7108,x:23.6,y:-32.05},0).wait(1).to({rotation:-7.4621,y:-28.8},0).wait(1).to({rotation:-5.2134,x:23.65,y:-25.6},0).wait(1).to({rotation:-2.9647,y:-22.45},0).wait(1).to({rotation:-0.716,y:-19.25},0).wait(1).to({rotation:-0.716},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,-188.2,462.3,306.6);


(lib.motionbushes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(336.2,140.2,1,1,0,0,0,336.2,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:336.3,x:326.35},0).wait(1).to({x:316.35},0).wait(1).to({x:306.35},0).wait(1).to({x:319.35},0).wait(1).to({x:332.35},0).wait(1).to({x:345.35},0).wait(1).to({x:325.05},0).wait(1).to({x:304.7},0).wait(1).to({x:284.35},0).wait(1).to({x:297.35},0).wait(1).to({x:310.35},0).wait(1).to({x:323.35},0).wait(1).to({x:336.3},0).wait(1).to({x:327.3},0).wait(1).to({x:318.3},0).wait(1).to({x:309.3},0).wait(1).to({x:300.3},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,0,733.5,280.4);


(lib.motionbench = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24));

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(1132.4,183.8,1,1,0,0,0,794.1,304.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:794.2,rotation:-8.9267,x:1123.75,y:113.95},0).wait(1).to({rotation:-17.8533,x:1114.95,y:44.1},0).wait(1).to({rotation:-26.78,x:1106.2,y:-25.85},0).wait(1).to({rotation:-35.7067,x:1097.45,y:-95.65},0).wait(1).to({rotation:-49.2656,x:1087.1,y:-166.3},0).wait(1).to({rotation:-62.8245,x:1076.8,y:-236.9},0).wait(1).to({rotation:-76.3834,x:1066.5,y:-307.45},0).wait(1).to({rotation:-89.9423,x:1056.25,y:-378.1},0).wait(1).to({rotation:-103.0666,x:1046.4,y:-343.25},0).wait(1).to({rotation:-116.1909,x:1036.6,y:-308.4},0).wait(1).to({rotation:-129.3151,x:1026.8,y:-273.6},0).wait(1).to({rotation:-142.4394,x:1017,y:-238.8},0).wait(1).to({rotation:-155.5637,x:1007.2,y:-204},0).wait(1).to({rotation:-168.688,x:997.45,y:-169.1},0).wait(1).to({rotation:-137.7773,y:-143.65},0).wait(1).to({rotation:-106.8665,y:-118.2},0).wait(1).to({rotation:-75.9558,x:997.4,y:-92.75},0).wait(1).to({rotation:-45.0451,x:997.45,y:-67.3},0).wait(1).to({rotation:-14.1343,x:997.5,y:-41.7},0).wait(1).to({rotation:16.7764,x:997.55,y:-16.2},0).wait(1).to({rotation:8.1771,x:997.5,y:64.65},0).wait(1).to({rotation:-0.4223,x:997.55,y:145.55},0).wait(1).to({rotation:-0.4223},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.2,-1194.6,1832.1,1954.5);


(lib.characterwalking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(1));

	// arm
	this.instance = new lib.arm();
	this.instance.setTransform(-206.7,140.35,1,1,0,0,0,71.9,52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.9996,x:-211,y:144},0).wait(1).to({rotation:9.9993,x:-215.35,y:147.65},0).wait(1).to({rotation:14.9989,x:-219.7,y:151.3},0).wait(1).to({rotation:7.4991,x:-214.2,y:143.1},0).wait(1).to({rotation:-0.0008,x:-208.7,y:134.85},0).wait(1).to({rotation:-7.5006,x:-203.15,y:126.55},0).wait(1).to({rotation:-15.0005,x:-197.65,y:118.35},0).wait(1).to({rotation:-7.5006,x:-203.4,y:125.8},0).wait(1).to({rotation:-0.0008,x:-209.2,y:133.35},0).wait(1).to({rotation:7.4991,x:-214.95,y:140.85},0).wait(1).to({rotation:14.9989,x:-220.7,y:148.3},0).wait(1).to({rotation:7.4991,x:-216.45,y:141.1},0).wait(1).to({rotation:-0.0008,x:-212.2,y:133.85},0).wait(1).to({rotation:-7.5006,x:-207.9,y:126.55},0).wait(1).to({rotation:-15.0005,x:-203.65,y:119.35},0).wait(1).to({rotation:-9.2526,x:-207.45,y:125.8},0).wait(1).to({rotation:-3.5047,x:-211.2,y:132.3},0).wait(1).to({rotation:2.2431,x:-214.9,y:138.8},0).wait(1).to({rotation:7.991,x:-218.7,y:145.35},0).wait(1).to({rotation:0.4912,x:-213.6,y:136.55},0).wait(1).to({rotation:-7.0085,x:-208.55,y:127.85},0).wait(1).to({rotation:-14.5083,x:-203.55,y:119.05},0).wait(1).to({rotation:-22.0081,x:-198.5,y:110.3},0).wait(2));

	// body
	this.instance_1 = new lib.characterbody();
	this.instance_1.setTransform(-51.9,71,0.8262,0.8262,0,0,0,-5.4,-71.5);

	this.instance_2 = new lib.characterhead();
	this.instance_2.setTransform(-126.05,-102,0.3876,0.3876,0,0,0,-22.1,-81.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},23).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqDUPQh7gdh6hjQhThEh2iHQhKhUgog2Qg6hOghhJIgBgDIgKgLQgQgWgCgeQgCgTAFgRQAAgMADgKQAGghAagWQAUgRAXgCIBShDQA7gwAbgXQAugqAggmQANgOA0hHQBXh1BQhRIBRhOQAzgwAcggIAigkIAHgGIgRgWQgPgSgGgMQgKgUgDgeIgEg1QgFgsgSg7QgchXgxhkQghhDg+hwQgbgwgLgXQgUgogLgiIgEgMQgWgXABgkQAAgqAdgYQAYgTAygFQBEgIANgEQAegIAqgfQA0gkASgJQAcgOAmgIQAagFArgEQA9gFCSgEIHMgNQAqgBAXAEQAkAGAWATQAZAXACAlQABAJgBAJQAIAMAKATQAtBXAvBxQAcBEAzCJQAZBBAKAfQASA2AKAsQAIAjAIA8QAKBIAEAYQAYCHBGCpQApBiBaDCQAZA3ANAXQAZAqAdAYQAVAQAfAPIA4AYQB6AyA8BCQAmArAQAzQASA4gMAzQgWBYhvBIQhuBGi2AwQhnAbjQAyIg3APQgfAHgZgCQgegCgYgQQgagRgHgaQgGgVAHgVIgFgRQg/jegHjkQgBhegCgvQgDhSgOg5QgNg5gehDQgTgrgohLIiNkNQAKBegqBwQgZBGhEB6QgZAsgNAUQgWAjgXAYQgWAYgpAdIhCAyQgsAjguA2QgcAggzBEIhXBxQgWAcABATQABARAPAPQAIAIAWAQQBYA/AjBtQAkBugjBmQgeBZhBAiQgkASguAAQghAAgmgJg");
	this.shape.setTransform(-107.4112,323.4216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ASDXjQk0gSkjhnQihg5hihFQhGgygUg1QgNgjAFguQADghAPgwQAVhDAihQQAUgyArhdIEtqQIAJgXQADgNgDgKQgCgJgOgQQjxkRkojYIAAAhQACAcAKBDQAkD9ABD8QAAA8gKAmQgPA0gkAXQgXAPgiAEQgXACgmgDQg2gEiSgOQh/gNhKgEQjngMiiAyQAPA4gUBHQgLAqglBSQgUAsgKATQgTAigXAUQggAdg1AQQgiAKg/AHQhBAIghAAQg3ABgpgPQgrgPgkgiQghgggYgqQglhDgRhvQgKhGgDhXQgCg3AAhmIAAj+QABghABgNQACgaAHgTQADgHAEgGQAAgSAHgQQAPgiAsgVQAzgZBNgEICIgBQBJgBCCgRQCOgTA8gDQApgCBQAAICPAAQAFhogQhnIgOhZQgJhGADhxIACiBQAAhJgIg3IgGgqQgEgZABgSQABgzAcgcQAIgIAJgGQALgQAQgKQATgLAagEQASgCAfAAIDFgBIBKgBQApgCAggFQA2gJBfghQBygmA4gXIAzgUIAPgFQAJgJALgFQAngRA6AkIAKAHIAOAKQBiBKByBpQBCA9CHCDQApApATAWQAfAkASAhQAIAOALAaIASAoQAQAgAbAkQAQAWAjAqIEIE4QAnAuATAaQAdAqAOAmQAcBJgOBjQgIA9giBvQhSEPhDDtQgSA/gFAjQgJA3AJAsQALA3AsA9QAaAkA6BEQBXBtATBmQAMA9gNA6QgNA/gnArQg0A7hgAVQgyALhEAAQgcAAgfgCg");
	this.shape_1.setTransform(-131.0495,335.1842);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AmNXVQgfgIg4gWIqUkCQgtgRgYgSQgjgZgFgiQgEgYALgcQAGgQATgiQAphIAnhrIBCi5QAkhmBMi4ICZlzQA9iWAihIQA4h6A6haQAQgYBKhqQA4hPAdg2IAYgrQANgWAOgOInMl2QgXgTgLgKQgSgRgJgSQgMgUAAgWQgBgVAJgPQgRgXADggQAEgkAZgWQAWgTAkgFQAWgEArABQByABBggGQBugHBigRIBwgVQBBgLAwABQAfAAAwAGIBNAIQAlADAMACQAbAFARALQATAMAKAVQALAVgBAWQgBALgDAKIAIAHIEuDfQBHA1AiAcQA5AvAnAsQArAwA3BWQBKB0ARAYQB3CnCMAgIA2ALQAfAHARAQQAeAZAAAuQAAApgXAmQgPAagjAmQgoArgOATQgSAZgWAuQgbA4gJAQQgTAfgwA9IjYESQheB4gzA6QhTBhhNBDQg/A3gYAiQgpA4AKA0QB4ATBGAfQBjAsAhBPQAaA8gQBJQgPBCgrA9QgwBFhDAlQhKAphIgOQgigGgxgZQhAgfgRgHQgkgNhLgLQhNgLgigMQgsgQgwgiQgdgVg2guIi4idQgdgZgPgQQgXgYgKgZQgNgdAFgeIABgFQgKgGgJgIQgigeACgpQADgkAhgmQArgqATgVQAcgfAgg5QAthPAJgOQAYgkArgxQAxg1AXgcQAgglB4imQBbh9BIhBQAsgoA9gpQAUgOAegSIgPgRQhJhSgPgQQgqgrg5gyIhnhWIgJAZQhyE6ifF+QhkDvjDHBQC3CECZClQAtAwAUAoQAbA1gNAvQgMAqgqAbQgnAZgwADIgLAAQglAAgqgMg");
	this.shape_2.setTransform(-92.1016,342.9118);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AoharQm3gXoDjoQhZgngzglQhHgzgchBQgXg1AEhCQAEg7AYg9QASgvAkg/QAqhGAUgkQA4hlBLi7QBUjUAnhPQBLiYCGi6QCfjVBPhsQDok7DClVQAWgmALgPIAKgNIgSgNQgughgagPQgpgagkgNIgqgOQgYgJgNgNQgXgUgEgiQgDghASgZQAFgGAGgFQgPgDgLgGQgSgKgMgRQgMgSgCgUQgDgUAIgUQAHgUAQgNQATgRAfgHQATgEAmgDQCMgICcgXQBzgSBJgXIA6gTQAjgMAYgFQAYgEAcgCIA2gBQBUAAA5ADQBNAFA/ANQAhAHAUAIQAcALARATIAIAKQAeAWAjAgIA8A8IDjDnQAvAwAZAcQAmArAZAoQAWAiAgBBQAiBHARAeQAbAuAqAzQAcAiAzA3QAhAjAPAWQAOAYAFAXQAMASAFAaQADAVAAApIABCDQgBBMgHA3IgMBEIgMBEQgHAvgKCEIgPC4QBDgDBCANQBTAQBHAoQBJAoA3A/QA5A/AeBMQAbBFgFA6QgFA2ghAuQghAvgxAVQgiAPgtAFQggADgzgBQhXgCg1gMQgogIg6gVIhhgiQg0gQhPgPQhYgQgsgJQhcgTijgxIiOgpQgkgKgRgHQgdgMgTgQQgXgTgKgbQgLgcAKgZQAEgMAJgKQgFgVAAgcQAAhBAUh3IAtkgQAHg2ACg2QAEhHgFh9IAAgvIgLgMIhRhYIgFASQgLAegbAeQgPASglAgQjXC9jXEQQiZDAjcFCQhGBlgiAnIgxA3QgfAigSAXQgeAogxBgQgWArgUAgIARABQC8AMCZBSQCpBaBMCXQAgA+AFA+QAFBGgiAxQgmA4hRAUQgvAMhAAAIgngBg");
	this.shape_3.setTransform(-117.8475,348.6506);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AoharQm3gXoDjoQhZgngzglQhHgzgchBQgXg1AEhCQAEg7AYg9QASgvAkg/QAqhGAUgkQA4hlBLi7QBUjUAnhPQBLiYCGi6QCfjVBPhsQDok7DClVQAWgmALgPIAKgNIgSgNQgughgagPQgpgagkgNIgqgOQgYgJgNgNQgXgUgEgiQgDghASgZIALgLQgOgDgMgGQgSgKgMgRQgMgSgCgUQgDgUAIgUQAHgUAQgNQATgRAfgHQATgEAmgDQCMgICcgXQBzgSBJgXIA6gTQAjgMAYgFQAYgEAcgCIA2gBQBUAAA5ADQBNAFA/ANQAhAHAUAIQAcALARATIAIAKQAfAWAiAgIA8A8IDjDnQAvAwAZAcQAmArAZAoQAWAiAgBBQAiBHARAeQAbAuAqAzQAcAiAzA3QAhAjAPAWQAPAYAEAXQAMASAFAaQADAVAAApIABCDQgBBMgHA3IgMBEIgMBEQgHAvgKCEIgPC4QBDgDBCANQBTAQBHAoQBJAoA3A/QA5A/AeBMQAbBFgFA6QgFA2ghAuQghAvgxAVQgiAPgtAFQggADgzgBQhXgCg1gMQgogIg6gVIhhgiQg0gQhPgPQhYgQgsgJQhcgTijgxIiOgpQgkgKgRgHQgdgMgTgQQgXgTgKgbQgLgcAKgZQAEgMAJgKQgFgVAAgcQAAhBAUh3IAtkgQAHg2ACg2QAEhHgFh9IAAgvIgLgMIhRhYQgCAJgDAJQgLAegbAeQgPASglAgQjXC9jXEQQiZDAjcFCQhGBlgiAnIgxA3QgfAigSAXQgeAogxBgQgWArgUAgIARABQC8AMCZBSQCpBaBMCXQAgA+AFA+QAFBGgiAxQgmA4hRAUQgvAMhAAAIgngBg");
	this.shape_4.setTransform(-120.7975,353.1006);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AL3SKIr3gPQg2gBghgIQgvgMgXggQgVgdgBguQAAgcAKg2QAtjygJkzQgFi9gmlrQgCgbgEgPQgFgXgKgQQgVghgwgNQghgJg3gCQgqG5A3G4QBLADAyBKQAuBEgBBUQgBBggwA+Qg7BKiOAdQjOApjNg0QhfgYgygrQg/g1gThgQgQhTAThgQAKgxAnh5QAjhrAIhAQAKhBgFhsQgEiDACgrQAEhHAVhsIAiiyQAYiUgGiWQgDg4AAgTQABgrAJgfQALgnAagbQAdgdAjgEQAQgCAdAEQAeAEAOgBQAygDA1g2QA5hDAggbQA4gvBagQQA6gLBrAAQBpAAAfAtQASgCAYAAIDXAAQAGgQAKgNQATgVAegFQAegFAZAOQAqAZALBNQADAVAEA0QADAvAFAaQAEAXALApQAMAsAEATQALA6gCBoQgBB0AFAvQAEAkAMA1IBHFVQAIAkABAXQAcClAIBUQAPCTgMB1QCGgFB8BFQB7BFBCB2QApBKADBMQADBWgxA2QgqAuhNAPQgsAJhHAAIgcAAg");
	this.shape_5.setTransform(-108.3695,307.5519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3,p:{x:-117.8475,y:348.6506}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3,p:{x:-126.6975,y:353.1006}}]},2).to({state:[{t:this.shape_5}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.5,-188,483.6,711.9);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bush
	this.bushes_mc = new lib.motionbushes();
	this.bushes_mc.name = "bushes_mc";
	this.bushes_mc.setTransform(-2051,55.05,2.4087,2.4087,0,0,0,336.3,140.1);

	this.timeline.addTween(cjs.Tween.get(this.bushes_mc).wait(23));

	// bench
	this.bench_mc = new lib.motionbench();
	this.bench_mc.name = "bench_mc";
	this.bench_mc.setTransform(-520.5,60.4,0.7913,0.7913,0,0,0,1132.4,183.7);

	this.timeline.addTween(cjs.Tween.get(this.bench_mc).wait(23));

	// goose
	this.goose_mc = new lib.motiongoose();
	this.goose_mc.name = "goose_mc";
	this.goose_mc.setTransform(2339.55,158.6,1.2824,1.2824,0,0,0,23.6,-19.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EgTpBJtMAAAiTZMAnTAAAMAAACTZg");
	this.shape.setTransform(-2953.8,-171.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.goose_mc}]}).wait(23));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AUXAAIOfAAEgi1AAAIZmAA");
	this.shape_1.setTransform(-2286.025,303.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("EHKJgFyMAAAAgUMuURAAAMAAAg1DIQRAAINJAAEES5gahIKqAAECprgahMBIbAAAEE+XgahMCLyAAAEkwWgahIEAAAEjyzgahMGBVAAA");
	this.shape_2.setTransform(0.025,473.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(11,1,1).p("A7NzQIhSAAEgqJgTQIhwAAIAAAnEAr6ALPIAA+fIhBAAEAjjgTQIkGAAAKazQIidAAAo9TRIHiAA");
	this.shape_3.setTransform(800.675,165.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AK1WYQhKAAgtgDQhCgEg1gJQhugVinhLQjthsjdiAQBkh+AbiLIAEgYIARAIQAzAWAvgUQAIAsAnAeQAoAdAugFQASgCAcgLIAtgQQAYgGAegBQAQgBAnABQJaALJIiRQBlgZBCgXQBZghBCgrQBuhJBQh3QAzhOgKg3QgJgxgygYQgzgYgrAYQgaAOgbAkIgsA7QgXAZglAWQgZAPgsATQjuBmkjAsQj4AnkwgBIiWAAQhUAChBAKIhRAOQgvAGgjgEQgLgCgxgNIAsg6QBMhkAxguQAsgoBBgsIB1hKQFxjpEWlNQB0iKAXgaQBUhXBSgpQAYgMA1gVQAzgTAZgNQAsgXA1gsIBbhNQASgPCHhoQBdhIA1g3IBahoQA3g/AqgiQBphRC9gkQCagdDDgGQB5gDDnAHQAuCiAJBfQANCPgxBpQgvBiiFBpIhwBXQhBAzgoApQg0A3gvBNQgkA5gsBZQhvDghVDqQguB+gIBNQgGA2AICMQAGB7gQBFQgRBNgyBHQgtBChEA2Qg7AwhQAqQg8AghZAlQhfAnglANQiyBDiXAjQiwAnjXAPQiYALjgAAIgVAAgEAvEgUzQgoADgaAaQgbAZgGAnQgFAnATAgQAUAgAlANQAlANAjgMQAugPATguQAOghgLgmQgLgmgfgWQgbgTghAAIgKABgEggoAWYQhKAAgtgDQhCgEg1gJQhugVinhLQlliilBjRQCqhBBUgpQAwgZArgaQAKAGAMAFQAzAWAvgUQAIAsAoAeQAoAdAugFQASgCAcgLIAtgQQAYgGAegBQAQgBAnABQJaALJIiRQBlgZBCgXQBZghBCgrQBuhJBQh3QAzhOgKg3QgJgxgygYQgzgYgrAYQgaAOgbAkIgsA7QgXAZglAWQgZAPgsATQjuBmkjAsQj4AnkwgBIiWAAQhUAChBAKIhRAOQgvAGgjgEQgLgCgxgNIAsg6QBMhkAxguQAsgoBBgsIB1hKQFxjpEWlNQB0iKAXgaQBUhXBSgpQAYgMA1gVQAzgTAZgNQAsgXA1gsIBbhNQASgPCHhoQBdhIA1g3IBahoQA3g/AqgiQBphRC9gkQCagdDCgGQB5gDDnAHQAuCiAJBfQANCPgxBpQgvBiiFBpIhwBXQhBAzgoApQg0A3guBNQgkA5gsBZQhvDghVDqQguB+gIBNQgGA2AICMIABA6QABBSgMA0QgQBGgrBCIgIAMQgNATgPASQglAsgwAnQg5AuhNApIgFADQg8AghZAlQhfAnglANQiyBDiXAjQiwAnjXAPQiXALjhAAIgVAAgADm0zQgoADgaAaQgbAZgGAnQgFAnATAgQAUAgAlANQAlANAjgMQAugPATguQAOghgLgmQgLgmgfgWQgbgTghAAIgKABg");
	this.shape_4.setTransform(1835.5363,159.5311);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6600").s().p("AQ3ETQAKhNABghQADgmgDjPQgBhxANhRQAdAVAbAmIAlA4QAWAiASAUQAoAtA/AhQAwAZBKAWIB9AnQBHAZAvAcIk1BsIhRAbQguAOglAGQgtAIg/AAIgrAAgA6mETQAKhNABghQADgmgDjPQgBhxANhRQAdAVAbAmIAlA4QAWAiASAUQAoAtA/AhQAwAZBKAWIB9AnQBHAZAvAcIk1BsIhRAbQguAOglAGQgtAIg/AAIgrAAg");
	this.shape_5.setTransform(2078.625,47.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AamRoQphgMnhhKIkigvQirgbh5gJQkYgTnFA1Qo+BEiiAGQiKAFmAgJQlHgHjBAQQhTAHgjgDQhDgEgpgeQgYgRgRgZQgVgegLgrQgPg4AAhZQAAjiAakaQAIhSANh3QAPiBAVivIBotBQPXAiPoglIGfgPQDrgGC0AFQB2AEC2AMQEMASAgABQP3A/MgiQQhiIxAsI9QAuI+C4IbQn5AMlOAAQiQAAhvgCg");
	this.shape_6.setTransform(794.55,171.9875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("EAs1AcPQEki8Dkh1QC7hgGDiiIQYm3QEjh6Ccg8QD7heDQg4QFahcFLgMQDvgKBFB1QAtBQgsBpQgkBXhVBRQlGE0ogCcQjQA7kVAvQhvASl/A1QjvAiiEAkQiQAnkIB0QmJCqjIBkQlECgjvCkQhdBBi3CEQijBwiCA3QiuBLj/AhQkqAaiTAQQJsojK2nBgEAMxAjMQBKjBCFjhQA8hkDBkkQChjzBTiYQAig+Bci6QBOidA1hZQCMjqEslCQC+jKCTiDQDDiqC8hrQCghaDShNQCZg2DrhDQIRiTGThBQH+hTG3AWQENAOCdBDQBpAuBOBJQBVBPAjBjQAXA9gDA8QgEBAgkAtQgwA9iHAeQj4A7oOAzQoCAxkCBBQlKBTmjDFQneD0jxB1IkXCKQifBRhvBLQiLBeiXCPQhjBcikCvQlrGBlzGyQijC+hJCDQhrDAALCwIjLAHQAKjYBZjrgEgJiAqCQi4gNi4gsQgPhlAEiUQAJioAChUQAJkvhfinQgnhGhehkQhth1gigxQg8hWhCikQhMjEgkhAQh1jXkUjYQlFjqiZh/QgugljVjIQieiThxhOQinhyjrhcQiPg2khhXQingwhNgTQiIghhwgMQg5gFiJgCQh8gEhFgIQjsgcjRiAQjPiBiEjGQg9hdAChFQAFhhBwhPQDkinGBAzQBxAPDIAyQDYA1BfAQQCnAaE2AJQFLAKCTATQJ7BUJlHCQEBC+EDEDQDWDWD2EmQCPCpBHBzQBmCmAcCdQAPBWgBCHQgDDCABAeQAIC+BRE1QBiFxATB/QAbC0gGDjQgEB9gTDvIgEArQhSAAhSgHgEgB2Ao4QAblHgyoJQhDqwgFihQgDg9gBjqQgBi3gIhxQgIhxgUiXIgmkIQiBuDgcttQgFiTAEhTQAHiAAYhjQAeh2A9hdQBEhmBeg4QBEEcAyFpQAfDgApGrICYXYQA9JhAOEOQAKDQAIGhIAXStQjDg7jXgQgEgaaAouQjFALhUgUQhbgWhnhCQgjgWiOhrQmPkoqgkIQiKg3myifQlmiEjThZIlFiLQi8hNiRgnQhBgRhygXQiBgbg0gNQluhbm1j9QjWh6jWiUQgzgjgagcQglgpgGgtQgJhGBLhVQCJiVDkg6QDGg0DrAZQCbARENBDQEoBHB+ATQDCAcEJAAIHPgLQI9gNFHBzQDTBKDlCbQCTBkD6DNQEeDsCYCRQDpDeCXDUQCyD6BUENQBdEngjESQhegfi4AJg");
	this.shape_7.setTransform(742.2019,-239.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCC99").s().p("EnKIAaiMAAAg1DIQRAAINJAAQBlAWB+AMQBFAHBKAFIADALIAFgBIAVgIQHoAfK+gkIAtgDQNJAVPVgSQIfgKIPgUIENAIQEmAKDsAQQDeAPBqgJQCCgKBigrIOfAAQA/AaBOATQDsA6D1gIQD0gJDohKIAjgLIATgBIEAAAQBXACBeAFIAtAdQBYgJBfgGIDvARQKiAvKsAMQGcAHEzgJQGEgMFJgpQCCgQBTgTIAdgHMGBUAAAQEfAWFHAFQFSAFKigQQAwgBAXgEQAXgEASgHMBIaAAAQCMBIBxArQCaA7CLAWQBfAPB3ACQBIABCOgDQC/gFBjgIQChgNB9geQA0gNB2gjQBtghA8gOIA/gMQAkgHAZgIQAngLAvgWIKqAAQCNBIBxArQCaA7CLAWQBfAPB3ACQBIABCOgDQC/gFBjgIQChgNB9geQA0gNB2gjQBtghA8gOIA/gMQAkgHAZgIQAngLAvgWMCLyAAAIAAUvMAAAAgUgElfAgUCICeAaQAPgRAOgSIi7AJg");
	this.shape_8.setTransform(0.025,473.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00CCFF").s().p("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");
	this.shape_9.setTransform(29.2423,-164.8096);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("EBziBD3Qh3gChfgPQiLgWiag7QhxgsiNhHIgZgNQhTgsinhbIhdgwQhYBFhyBDQg9AkgzAYQgvAWgnALQgZAIgkAHIg/AMQg8AOhtAhQh2Ajg0ANQh9AeihANQhjAIi/AFQiOADhIgBQh3gChfgPQiLgWiag7QhxgsiNhHIgZgNQhTgsinhbQiUhOhsguQh6gzh9giQhHgUgmgYQg2gigEgyQgFgxAvgpQAlghA9gWQBEgXB1gfQCOgkAsgOQDXhBByhpQAwgsBDhaQBNhnAigkQBAhFBuhJQCBhQA/gqQD5ikDHjgQA/hHB5iRQBth5BjhBQAngaBDgiIBrg4QDMhwDbjhIB4h8QBFhFA+gqQB1hRCkgpQB/ggC1gMQCqgNFUgBQAugBAbAEQAbAEAVAJQAYgLAhgEQAPgCAPABQAOAAANABQAaACAaAHQA2AMAxAeQBWA0BHBmIAgAuQAUAZATAOQAUAOAfALQAEACAyAOQBHAUC6BQQCfBFBlARIBCAMIAFABQA8g2A9g+IB4h8QBFhFA+gqQB1hRCkgpQB/ggC1gMQCqgNFUgBQAugBAbAEQAbAEAVAJQAYgLAhgEQAPgCAPABQAOAAANABQAaACAaAHQA2AMAxAeQBWA0BHBmIAgAuQAUAZATAOQAUAOAfALQAEACAyAOQBHAUC6BQQCfBFBlARIBCAMQAlAKAWASQAeAZAFArQAFArgYAgQgSAYgiAQQgVAKgrANQjnBElzCDQh4Arg/ANQg7AMhMADQgqAChfAAQgmAAgWgDQgggFgXgOIgBgBIgQAPQgaAYgwAhQg7AqgRANQgpAggwAxQg5A4grA5QgfAqghA5QgSAfgnBJIg+B5QgiBFgWA3QhRDLgIDdIgCCHQgCBPgKA3QghCuiWCaQh1B5jEBzQg9AkgzAYQgvAWgnALQgZAIgkAHIg/AMQg8AOhtAhQh2Ajg0ANQh9AeihANQhjAIi/AFQhvAChEAAIgjAAgEBmfA2yQgbCLhkB+QDdCADuBsQCnBLBuAVQA1AJBCAEQAtADBKAAQDvAACegLQDXgPCwgnQCXgjCyhDQAlgNBfgnQBZglA8ggQBQgqA7gwQBEg2AthCQAyhHARhNQAQhFgGh7QgIiMAGg2QAIhNAuh+QBVjrBvjgQAshZAkg5QAvhNA0g3QAogpBBgzIBwhXQCFhpAvhiQAxhpgNiPQgJhfguiiQjngHh5ADQjDAGiaAdQi9AkhpBRQgqAig3A/IhaBoQg1A3hdBIQiHBogSAPIhbBNQg1AsgsAXQgZANgzATQg1AVgYAMQhSAphUBXQgXAah0CKQkWFOlxDpIh1BKQhBAsgsAoQgxAuhMBkIgsA6QAxANALACQAjAEAvgGIBRgOQBBgKBUgCICWAAQEwABD4gnQEjgsDuhmQAsgTAZgPQAlgWAXgZIAsg7QAbgkAagOQArgYAzAYQAyAYAJAxQAKA3gzBOQhQB3huBJQhCArhZAhQhCAXhlAZQpICRpagLQgngBgQABQgeABgYAGIgtAQQgcALgSACQguAFgogdQgogegIgsQgvAUgzgWIgRgIIgEAYgEA5lA3KQhUApiqBBQFBDRFlCiQCnBLBuAVQA1AJBCAEQAtADBKAAQDvAACegLQDXgPCwgnQCXgjCyhDQAlgNBfgnQBZglA8ggIAFgDQBNgpA5guQAwgnAlgsQAPgSANgTIAIgMQArhCAQhGQAMg0gBhSIgBg6QgIiMAGg2QAIhNAuh+QBVjrBvjgQAshZAkg5QAvhNA0g3QAogpBBgzIBwhXQCFhpAvhiQAxhpgNiPQgJhfguiiQjngHh5ADQjDAGiaAdQi9AkhpBRQgqAig3A/IhaBoQg1A3hdBIQiHBogSAPIhbBNQg1AsgsAXQgZANgzATQg1AVgYAMQhSAphUBXQgXAah0CKQkWFOlxDpIh1BKQhBAsgsAoQgxAuhMBkIgsA6QAxANALACQAjAEAvgGIBRgOQBBgKBUgCICWAAQEwABD4gnQEjgsDuhmQAsgTAZgPQAlgWAXgZIAsg7QAbgkAagOQArgYAzAYQAyAYAJAxQAKA3gzBOQhQB3huBJQhCArhZAhQhCAXhlAZQpICRpagLQgngBgQABQgeABgYAGIgtAQQgcALgSACQguAFgogdQgogegIgsQgvAUgzgWQgMgFgKgGQgrAagwAZgEBxIAgLQgaAYgwAhQg7AqgRANQgpAggwAxQg5A4grA5QgfAqghA5QgSAfgnBJIg+B5QgiBFgWA3QhFCugRC8QAfgjAkgwQBNhnAigkQBAhFBuhJQCBhQA/gqQD5ikDHjgQA/hHB5iRQAyg3AvgsIgWAIQh4Arg/ANQg7AMhMADQgqAChfAAQgmAAgWgDQgggFgXgOIgBgBIgQAPgECf6AXLQADDQgDAmQgBAggKBOIArAAQA/gBAtgHQAlgGAugOIBRgbIE1hsQgvgdhHgYIh9gnQhKgXgwgZQg/ghgogtQgSgUgWgiIglg4QgbgmgdgVQgNBQABBygEB0cAXLQADDQgDAmQgBAggKBOIArAAQA/gBAtgHQAlgGAugOIBRgbIE1hsQgvgdhHgYIh9gnQhKgXgwgZQg/ghgogtQgSgUgWgiIglg4QgbgmgdgVQgNBQABBygEgdxBA9QlHgFkfgWQjQgQi7gZQlqg6i2gZQiPgUh9gLQiagNh9ACQhZABhyAKQiAAMieAXQmHA4hgAJQioAQjWAEQhxABkMgBIpjgGQiBAAg6gnQg2gmgjhaQhEiqAAkbQAAktBVoyQBZpMAGkUQADhDAHggQANg1AhgdQAIgHAKgGQAtgYBbACIAEAAIgYgPIgEgCQgtgfhfhWQkokMnajaQiKhArRkaIoNjTQk9h/jVhKQiIgvmRh6QlThqjFhJQpgjilZlDQiCh1gZhsQgch0BHh8QA9hrB0hVQCShsCwg6QCvg5C2ABQCtACEBA+QGKBiAfAFQEZA1KcgMQJogMFHBZQFPBcFdDuQD+CtFXE6QEBDrCdCtQDVDqCGDkQCaEIA5EVQA9EuhBEPQgHAcgJAXQgKAYgOARIBcACIAfAAQgFgPABgPIgBgBIgLgMQgjgvAChpIAMnUQAEiWgKhQQgQh/g0hYQgjg6hUhTQhihhgfgmQhGhahDi6QhMjXgthLQg4hfhjhiQg8g8iAhrIpEngQixiUhihKQibh2iIhPQkAiSk1hWQj+hJjwgWQhKgGiWgIQiGgIhXgQQkKgrjpiSQjoiUicjaQiDi5AViSQAXiyDeiHQCzhsDUglQDTgjDMArQBLAQCWAxQCUAvBOAQQCLAeDTAAQDtgGB2ADQGtALGzCkQGVCYF5EMQFTDwFIFWQEVEkEmGGQBKBiAkA8QA2BaAYBTQAbBfgBCQQgBBRgGCjQADCyBEEbQgMiugLidQgnoCg/qBQgmmFhTr8QgckFgIiNQgMjfARizQAXjUBFi1QBMjICBiOQBZhhBPACQBoAABNCNQAzBaAhB1QAaBZAXCEQA7FRAoImQAxK8AWC+QASCYAwFUQAuE/ASCtQAcEQAMFWQAIDNAGGaIASTpIAAAgIAPAAQgFgcADgkQARmREDniQBWihCej6QDMlBAxhUQAyhUByjOQBoi7A/hnQHxsvKxmQQDgiCEahrQDhhUE1hVQOgj9LJATQGeAMD1B/QCdBRBpCGQBvCOARCjQARCvhcB8QhMBliZAyQhnAhi2ASQspBUlcBEQp/B8nCD1QhGAmjDB3QimBkhoAzQgpAUiyBOQiHA8hRAtQiRBUiYCNQhkBcilCxQl2GTmUHZQhOBcgiAzQg5BSgYBNQgUA9gUCBQgUBcglA3QgJAMgJAKIgCADICnANIAAgEQACgRAIgRQAIgQANgQQASgWAmggQKno4GWkhQJtm9I1j4QCQhADohaQE2h3BEgcQCehAF8ioQFWiWDHhMQJ2jzHpgXQFIgPCOCPQBUBWARCFQAQB8gwB4QhODFjvCtQlJDxn4CIQkKBJqJBqQjVAkh4AbQi2AniPA0Qh+Avi4BcQkSCJgfAOIkqCEQiuBQhwBJQhOAyjaCvQieB+hzBAIgiARIghAQQClgNCjgUQCfgUCegZQBBgNAhANQAjAMAUAhQAOAXAHAiQAKA9gPBXQhdIKAlIWQAZFgBRFTQApCvA4CsQBNDthrBIQgLAHgOAGQgSAHgWAEQgXAEgwABQoGAMk/AAIivgBgEg5RA67QB5AJCqAaIEiAvQHiBKJgANQF0AHLSgRQi4ocguo9Qgso/BioxQsgCQv3g+QgggBkMgSQi2gNh2gEQizgFjtAGImeAQQvpAlvXgjIhnNBQgWCvgPCCQgNB4gHBRQgbEbAADiQAABZAPA4QALAqAVAeQARAZAYARQAqAfBCAEQAjACBTgGQDBgRFHAIQGAAJCKgFQCigHI+hDQFOgnDwAAQBXAABKAFgEhdhAX4IgbAHIEyAJQhRgehUAAQg4AAg6AOgEhFUAYGIBogFQgpAAgIgBQgVgCgSgFQgHAIgJAFgEAlGgOlQlLAMlaBcQjQA4j7BeQicA8kjB6IwXG3QmDChi7BgQjkB1kkC8Qq2HBpsIjQCTgQEqgaQD/ghCuhLQCCg3CjhwQC3iEBdhBQDvikFEigQDIhkGJiqQEHh0CQgnQCEgkDvgiQF/g1BvgSQEVgvDQg6QIgicFGk0QBVhRAkhXQAshpgthQQhAhsjQAAIgkABgEAGYglwQmTBBoQCTQjrBDiZA2QjSBNigBaQi8BrjDCqQiTCDi+DKQksFDiMDqQg1BZhOCdQhcC6giA+QhTCYihDyQjBEkg8BkQiFDhhKDBQhZDrgKDYIDLgHQgLiwBrjAQBJiDCji+QFzmyFrmAQCkivBjhcQCXiPCLheQBvhLCfhRIEXiKQDxh1Hej0QGijGFKhTQEChBICgxQIOgzD4g7QCHgeAwg9QAkgtAEhAQADg8gXg9QgjhjhVhPQhOhJhpguQidhDkNgOQhcgEhfAAQlnAAmTBBgEiWmgvgQhwBPgFBhQgCBFA9BdQCEDGDPCBQDRCADsAcQBFAIB8AEQCJACA5AFQBwAMCIAhQBNATCnAwQEhBXCPA2QDrBcCnByQBxBOCeCTQDVDIAuAmQCZB/FFDqQEUDYB1DXQAkBABMDEQBCCkA8BVQAiAxBtB1QBeBkAnBGQBfCngJEvQgCBUgJCoQgECUAPBlQC3ArC5AOQBSAHBSAAIAEgrQATjvAEh9QAGjjgbi0QgTh/hilxQhRk0gIi+QgBgeADjCQABiHgPhWQgcidhmimQhHhziPiqQj2kmjWjWQkDkDkBi+QplnCp7hUQiTgTlLgKQk2gJingaQhfgQjYg1QjIgyhxgPQhagMhSAAQkLAAiuCAgEhHEg9rQg9BdgeB2QgYBjgHCAQgEBTAFCTQAcNtCBODIAmEJQAUCXAIBxQAIBxABC3QABDqADA9QAFChBDKvQAyIJgbFHQDYAQDDA7IgXytQgImggKjQQgOkOg9piIiY3YQgqmrgfjgQgylphEkcQheA4hEBmgEhYAAUtQAjkShdknQhUkNiyj6QiXjUjpjdQiYiRkejsQj6jNiThkQjlibjThKQlHhzo9ANInPALQkJAAjCgcQh+gTkohIQkNhDibgRQjrgZjGA0QjkA6iJCWQhLBVAJBGQAGAtAlApQAaAcAzAjQDWCUDWB6QG1D9FuBbQA0ANCBAbQByAXBBARQCRAnC8BNIFFCKQDTBZFmCEQGyCfCKA3QKgEIGPEoQCOBrAjAWQBnBCBbAWQBUAUDFgLQApgCAkAAQCAAABJAYgECXhAYcQglgNgUggQgTggAFgnQAGgnAbgZQAagaAogDQAngDAfAVQAfAWALAmQALAmgOAhQgTAuguAPQgRAGgSAAQgSAAgTgHgEBsDAYcQglgNgUggQgTggAFgnQAGgnAbgZQAagaAogDQAngDAfAVQAfAWALAmQALAmgOAhQgTAuguAPQgRAGgSAAQgSAAgTgHg");
	this.shape_10.setTransform(1164.2335,-109.165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3079.6,-643.4,6014.799999999999,1289.9);


// stage content:
(lib.final1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0,park:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var root = this;
		
		var breeze_snd = createjs.Sound.play("breeze");
		
		stage.enableMouseOver();
		
		this.start_btn.addEventListener("click" ,toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2");
			var click_snd = createjs.Sound.play("start");
			root.gotoAndStop("park");
		}
		
		this.bg_mc.goose_mc.addEventListener("click",handleClickGoose);
		
		function handleClickGoose(event){
			var quack_snd = createjs.Sound.play("quack");
			root.bg_mc.goose_mc.play();
		}
		
		this.bg_mc.bushes_mc.addEventListener("click",handleClickBush);
		
		function handleClickBush(event){
			var rustle_snd = createjs.Sound.play("rustle");
			root.bg_mc.bushes_mc.play();
		}
		
		this.bg_mc.bench_mc.addEventListener("click",handleClickBench);
		
		function handleClickBench(event){
			var clank_snd = createjs.Sound.play("clank");
			root.bg_mc.bench_mc.play();
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var bgmusic_snd = createjs.Sound.play("opening");
		
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);
		
		var root = this;
		var speed = 100;
		
		function handleKeyDown(event){
			console.log(root.bg_mc.x);
			if (root.guitar_mc.currentFrame > 22){
				root.guitar_mc.gotoAndPlay("walking");
			}
			
			if (event.keyCode == 39 && root.bg_mc.x > -2173.4){
			root.guitar_mc.scaleX = 1.3023;
			root.bg_mc.x = root.bg_mc.x - speed;
		
			}
			
			if (event.keyCode == 37 && root.bg_mc.x < 2926.6){
			root.guitar_mc.scaleX = -1.3023;
			root.bg_mc.x = root.bg_mc.x + speed;
		
			}
		}
		
		function handleKeyUp(event){
			root.guitar_mc.gotoAndPlay("standing");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// walking
	this.guitar_mc = new lib.characterwalking();
	this.guitar_mc.name = "guitar_mc";
	this.guitar_mc.setTransform(406.2,662,1.3023,1.3023,0,0,0,-52,132.8);
	this.guitar_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.guitar_mc).wait(1).to({_off:false},0).wait(1));

	// text
	this.instance = new lib.bassclef();
	this.instance.setTransform(1761.2,929.4,0.1637,0.1637,-14.9961,0,0,-11.8,-5.7);

	this.instance_1 = new lib.trebleclef();
	this.instance_1.setTransform(419.75,102.85,0.3128,0.3128,10.4636);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkvF6QAAglAag2IBSiSIFkpKICPgIImLJ1IhQCGQgdA1AAAhQAAAjAcAAQAbAAAugdQAugeA0g1IBghnIBchyIALAEIgjAuIgpA0IgtA0IgrAwQhKBMg5AlQg5Alg+AAQhWAAgBhMg");
	this.shape.setTransform(1725,902.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjwAMICGjiICRgFIioDtIACACQAxg6AmgmIBBg6IAvgjIAdgWIAagXIAdgMIAogGIA8gCIgtBIQgVAmAAArQAAA3A3AAQASAAASgIIAggTIAdgZIAagZIAFAHQgkAsgwAcQgxAbg6AAQgzABgdgaQgegbAAg1QAAghATgdIgCgDQg2AkgvAvQgxAwgqA0IhNBsIg/BsIiBADg");
	this.shape_1.setTransform(1674.025,922.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhMDhQgXgWABgeIABgUIAEgNIgCAAQgoAsgyAfQgyAfg6AAQgeAAgWgMQgWgLgNgUQgOgUgGgZIgGgzQgBhAAjg9QAjg/A0gyQA0gzBBgfQBAggA8AAQAsAAAZATQAZAUARAoIAhgzICFgHIgiA3IgvBHIg0BOIgwBNIgjBGQgOAhAAAXQAAAgAhAAQAeAAA1gkQA0gkA6g6IAxg1IAvg2IArg0IAfgnIAIAFIhLBjQgsA2g+A+Qg9A9g8AnQg8Ang5AAQgqAAgWgVgAhcjTQgeARgcAeIg0BCIgrBLIgdBIQgJAkgBAZQAAAlANAcQALAbAoAAQAbgBAegVQAdgVAbggIA1hHIAshOIAchLQALgjAAgYQAAgjgMgTQgOgTgkAAQgdAAgeASg");
	this.shape_2.setTransform(1621.3,923.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHHoIhQgKIhQgMIhIgQIgvANIg4AKIg6AHIgzADIg3gEIgzgLIglgSQgOgKAAgNQAAgfBAAAIBVAHIBSAPIBEAPIAvAHQBJgLA5g1QA3g1AyhOQAyhOAxhfQAyhdA/heQBAheBShSQBRhTBxg3IAAgCIhEgMIhdgEQg+AAhGAPQhIAPhHAeQhHAdhDArQhCArg0A3Qg0A3gfBCQgeBDAABMIAFAzQAFAZAMAWQAMAVAVAMQAVAOAdAAQAwAAAngbQAmgbAagnQAbgmAPgrQAOgpAAggIAAgbIgDgeIAQAAIACAYIABAdQAAAsgTAxQgRAygkApQghAqg0AcQgzAbhEAAQgkAAgdgPQgcgOgVgZQgUgZgLgfQgKggAAgjQAAhDAjhAQAkg/A7g5QA6g5BOgvQBMgvBTgiQBTgiBUgTQBUgTBKAAIBiAGIBXAQIBZgeQAzgPAogEIACAKIhMATIhHAfQBCAcApAzQArA0AABLQAAA3gcAtQgcArgrAfQgqAfg1ARQg0APgxAAQgxAAgfgWQgggXgBghQAAgaASgSQAUgSAgAAIAhADIAWAKQgYANgNASQgOASAAAWQAAAWANAKQANAKAQAAQAjAAAhgcQAhgbAagoQAagpAPgvQAQguAAgoQAAgxgPgkQgPgkglgWQhKAzg7BMQg6BMg0BYIhnCvQg0Bag+BOQg9BOhNA7QhNA7hnAYIAAACIAtAJIA2AIIA0AGIAwACQDFAACmhQQCnhQB6isIAJAGQg1BOg5BAQg6BAhFAvQhFAuhTAZQhTAZhrAAg");
	this.shape_3.setTransform(1537.15,899.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AklDKQgrgrAAhFQABg+Akg7QAmg8A4gwQA4gvBDgeQBEgdA6AAQA3AAAfAVQAgAWgBAmQAAAfgVAZQgVAaghAUQghAVgqAPIhSAaIhMATIg8ANIgFAuQgBA3AfAjQAeAiA3AAQA3AAA/ggQBBggBBg9IBghiIBRhhIAJAJIhWBqQgtAzg/A7QhYBPhQAeQhSAehHAAQhJAAgqgsgAgsjKQgkAagiAnQggAogaAqQgYArgIAfQA1gKAvgXQAvgXAlgeQAjgeAWgiQAWgjAAgeQAAgSgKgIQgJgHgQAAQgfAAglAbg");
	this.shape_4.setTransform(1423.7,923.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdGpQgVgbAAgjQAAgsAcguIA9hZIA9hSQAcgmAAgcQAAgSgKgJQgKgJgNAAQgcAAgjAWQgiAYgnAmIhOBWIhLBfIg+BeIgtBMIiDAEIIXt0ICLgFImoKdIADACIA/hNQAjgsAqgnQApgoAugaQAugaAyAAQApAAAXAVQAXAVAAAqQAAAigcAvIg9BfIg+BeQgcAsAAAfQAAAfAaAAQAUAAAdgTIA/gwIBGhCIBEhKIA6hEIAng0IAIAIIhQBjIhiBtQhFBIgxAfQgwAegzABQgtAAgWgbg");
	this.shape_5.setTransform(1361.325,902.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjlEpQgfgTAAguQAAghAOgjIAnhOIA6hdIBIh1IhgAAIAJgXIBiAAIBgiiICKgFIhrCnICjAAIgLAXIilAAIhhCeIg/BsIgjBEQgLAZAAAUQAAARAJAKQAKAKAQAAQAgAAA0ghQA0ggA8g6IBahgIBahuIAIAGIhKBdIhjBsIg8A4Ig+AuIhAAgQgeALgeAAQgpAAgegSg");
	this.shape_6.setTransform(1316.725,916.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeDXQgXgbAAgiQAAgsAcguIA8hZIA8hUQAcgnAAgeQAAgOgJgJQgJgJgSAAQgZAAgjAXQgiAYgmAmIhOBWIhLBfIg/BdIgtBNIiCADICJjfICHjiICSgFIinDoIACACIA0hAQAjgqArgpQAsgpAxgfQAygfAyAAQAqAAAVAYQAXAYAAAiQgBAsgbAtIg9BaIg9BXQgbAqgBAjQABAQAHAJQAIAKASAAQASAAApgbQAqgcBHhKIBlhyIBFhUIAMAHIhRBiIhoB0QhDBGguAdQgvAegyAAQgvAAgYgbg");
	this.shape_7.setTransform(607.7,138.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjkFfQgXgXAAglQAAgaAKgbIAghFIA9hlIBhiWICDgGIhnChIhHByIgpBNQgOAfAAATIAGAZQAGAKALAAQAaAAAvgeQAugeBGhHIA3g7IAyg3IArgwIAegjIALAIIglAuIgxA3Ig0A5Ig1A2QhJBKg1AdQg1AegtAAQgqAAgXgXgABkkDQgUgPAAgdQAAgeAWgUQAWgUAdAAQAZAAASASQATATAAAYQAAAagUAUQgVAVgaAAQgcAAgUgOg");
	this.shape_8.setTransform(564.825,124.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgtG1QgTgWAAgiQAAgfASgrIAuhpIgsAOIgoAHQgXAAAAgUQAAgJAJgHQAJgGAZAAIApADIAfAFIAdgIIAmgYQATgPAOgXQAPgWAAgfQAAgWgMgPQgKgPgTAAQgbAAgkAYQgiAXgnAmIhOBVIhJBfIg9BXIgpBFIh8AEIIat5ICNgIIjXFWIjcFQIADADIBEhOIBShTQAsgoAwgbQAwgaAxAAQAoAAAVAWQAVAUABAiQAAAhgPAXQgPAWgcAQQgcARgpAOIhaAbIAAADQAWAEAQAWQAQAWAAAYQAAAlgNAhQgMAjAAAdQAAAXAUAAQAhAAAvgiQAugiAwgyIBghoIBRhjIALAGIhZBuQgwA8g2A0Qg2A1g5AjQg5Akg6AAQgogBgUgWg");
	this.shape_9.setTransform(478.5,117.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhMDhQgXgWABgeIABgUIAEgNIgCAAQgoAsgyAfQgyAfg6AAQgfAAgVgMQgWgLgNgUQgOgUgGgZIgGgzQgBhAAjg9QAjg/A0gyQA0gzBBgfQBAggA8AAQAsAAAZATQAaAUAQAoIAhgzICFgHIgiA3IgvBHIg0BOIgwBNIgjBGQgOAhAAAXQAAAgAhAAQAfAAA0gkQA0gkA6g6IAxg1IAwg2IAqg0IAfgnIAIAFIhLBjQgtA2g9A+Qg+A9g7AnQg7Ang6AAQgqAAgWgVgAhcjTQgeARgcAeIg0BCIgrBLIgdBIQgJAkgBAZQABAlAMAcQALAbAoAAQAbgBAegVQAdgVAcggIA0hHIAshOIAchLQALgjAAgYQAAgjgMgTQgOgTgkAAQgdAAgeASg");
	this.shape_10.setTransform(351.3,138.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiiHKQAthAAehHIA1iQIApiSIApiNIgDgDIhdByIh2B9IiBB+IiAB0IgnAjIggAcIgeATIghAGIgNgFIgFgLQAAgMAKgHIAZgPIAfgcQASgTAOgkQAohmAZhoQAahoAghfQAghgAwhUQAxhVBWhAIgDgCIhYAbIhqAiIhtArQg2AYgrAgQgqAggaAoQgbAoAAA0QAAAkAXAeQAYAdAoAAQBBAAAdgxQAdgxAAhRIAPAAQAAAogHAlQgIAkgTAcQgTAcggAQQgfAQguAAQgbAAgYgIQgZgJgTgPQgTgQgMgXQgLgXAAgcQAAg5AbgoQAbgoAwgfQAxgfBBgYICOguICigwICrg4IAFAKQg0AagmA0QgnA1geBEQgeBFgZBPIgzCeIg5CZQgfBKgpA5IACADICKh/IB/h/IBrh0IBOhhQATgaAPgiIAeg8QAYguAjgmQAigmAjgbIBBgrQAdgPAMAAQATAAAAATQAAAJgLAMIgcAZIgkAcIggAhQghApgVA1IgmBvIghB8IgmCDQgVBDgfBDQgfBDgvBAIACADICEhQQBHgvBGg5QBGg4BChBQBChBA0hFQAzhHAghKQAghKADhIQgQgIgLgOQgLgOAAgSQAAgdATgVQASgUAdAAQAqAAASAdQARAdAAAmQAABPgxBXQgxBXhPBVQhOBVhiBQQhhBQhgBBQhgBBhUAvQhUAwg0ATg");
	this.shape_11.setTransform(266.825,116.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// button
	this.start_btn = new lib.guitar_1();
	this.start_btn.name = "start_btn";
	this.start_btn.setTransform(984.3,573.45,2.3023,2.3023);
	new cjs.ButtonHelper(this.start_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_btn).to({_off:true},1).wait(1));

	// guitar
	this.instance_2 = new lib.basicstring();
	this.instance_2.setTransform(1160.8,494.05,2.8507,2.8507,0,0,0,170.1,173.3);

	this.instance_3 = new lib.basicstring();
	this.instance_3.setTransform(1128.8,449,2.8507,2.8507,0,0,0,170.1,173.3);

	this.instance_4 = new lib.basicstring();
	this.instance_4.setTransform(1086,420.85,2.8507,2.8507,0,0,0,170.1,173.3);

	this.instance_5 = new lib.basicstring();
	this.instance_5.setTransform(1054.55,391.65,2.8507,2.8507,0,0,0,170.1,173.3);

	this.instance_6 = new lib.basicstring();
	this.instance_6.setTransform(1031.65,352,2.8507,2.8507,0,0,0,170.1,173.3);

	this.instance_7 = new lib.basicstring();
	this.instance_7.setTransform(986.1,329.25,2.8507,2.8507,0,0,0,170.1,173.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(11,1,1).p("A+FryMA8LAAAIAAXlMg8LAAAg");
	this.shape_12.setTransform(504.6831,914.3692,1,1,44.9994);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("A+FL0IAA3mMA8LAAAIAAXmg");
	this.shape_13.setTransform(504.6831,914.3692,1,1,44.9994);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("EgNjBj5Qn1gqthADIqsACQmEgCkogOQjygMi0gUQjigai+gvQhpgaiYgvQirg3hVgaQk1hejUgNQiogLjRAdQh8AQj5AzIwFDSQh3AYg8AHQhlALhQgMQg+gKhKgbQgsgRhXgnIxjn/QiqhNhTguQiIhNhahWQhwhrhUiiQhEiDg4i2QhMj2g1k9Qggi/gvl+Qgfj/gMh4QgUjSgCinQgFlRA9mfQAlj+BknrQBBlAAoigQBCkJBRjKQCElME0nXQCqkABUiBQCTjhBeioQA7hpAZhJQAMghAHgfIASgcQBBhlAWgeQA0hIAzgtQBNhDB3gwQBKgdCSgnIdkn8QC9gzBjgXQChgmCDgTQEXgpFbAOQHHATG+BnQG9BoGgC4ID8BvQCRA9BzAYQDIAqDhgiQDJgfDUhZQC/hRDTiEQCbhiDciiQD9i8CniQQDci/Cci8QA0g/BiiAQBhiCAzg+QBPheBshvQA/hACHiEQC+i6BlhfQCkiZCLhzQLMpUKXgsQDbgPA1gKQCWgfBHhbQAigrANgzQBvg4CNhMIFFiwQCXhRBmgwQCNhCB6grQB0goCRgiQBlgYCkggQT+j3UShZQCEgJCFgIQETgPC2ABIAkABQEOAFDaAsQA+AMBFASQCkAsDKBMICQA3QCMA3DLBRQCyBDCTAqQBYAZBNAQQBLAQBKAJQnfGgnKG4QjdDVh0CIQitDLhdDEQhuDmgGDvQgFEEB6DEQBUCHC9CXQA0ApBrBSQBfBKA7A3QDGC4CAEEQB4D2AsEcQBNH1ifJYQgjCFglBaQgyB2hDBTQg2BEhWBDQg0AphsBIQiQBghLArQh9BJhsAoQh8AtiyAbIk2AoQm8A+mhCgIiWA7QhYAjhAAUQhzAkiiAdIkaAvQpmBrpCDxQwwG/waPKQj/DrjADSQjiD3ipDyQg+BZhXCKIiSDmQixESiTCgQhgBpi9ClQjRC4hRBSQhQBRkBExQjMDyiXB8QhGA6iTBuQh9Bkg+BfIhOCLQguBUgvArQhWBRiVARQgnAEg2AAQhLAAhngIg");
	this.shape_14.setTransform(901.6312,539.8393);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EiJBBkQQhegEhLgNQhUgOhkghQg/gVh1gtQi3hGhagpQiWhChthJQjXiOipjlQiajQhqkKQhajjg/khQgtjOgvlGQhJn4galpQggnYAhmNQAUjtAzklQAeixBIldQBKlqAtizQBMkrBcjkQCIlMFRoQQDZlVAvhNQBSiGBCh4IgBgCQgmhmAlhbQAXg3A5g6QBFhBAhghQA3g2BZh2QBdh6Axg0QDMjVF3hwQCHgpDKgpIFUhCQEFg2E3hcQDahAFZh0QDPhGBXgaQCmgzCFgcQDJgrDlgOQDIgNDrAJQIDASH7BuQH7BuHeDEQEEBsBPAZQDEA/CegIQCpgJC8hbQCBg+DEiHQGSkTD/jiQFQkrDNk6QAthFBYiMQBQh3BMhHQAzgvBag8QB9hUAVgQQBbhFB4h5IDJjLQEckQGxjtQFJi0ErhdQDrhKDegWQASgSAWgQQBCgwBqgrQA9gZB7gtQByguCThSQBVgwCohjQE3ixDagnQBMgOBfgEQA6gCByAAIGWgFIjFgFMBgegACQA+AAAgAEIASADQAoAHAeAPQA7AfAcA7QBJAWA5BDQBPBfgPBuQgLBOg7BPQgnA2hSBMQiiCXieCFIjkC+QpQHwntIVQhqBzgxBUQhFB5AJBvQAIBcBABdQAvBFBaBVQAfAdDRC5QCTCBBVBeQDXDsCHE7QB/EqArFQQBLJYjAK+Qg0DAg6CIQhJCshiB8QhYBxiIBsQhgBNijBrQimBshvA9QidBUiMArQiSAsjoAaQleAmgiAFQkUAskNBrIjmBiQiLA7hfAdQiLArjUAeQjuAdh3ATQm7BHnVDFQmRCpm/ERQqBGHnxHGQolH2ltI7QiWD1hMB5QiHDVh4CEQhjBtjGCoQjeC7hSBTQhTBThlB5Qg7BHhzCQQjZELihCCQhEA2iOBnQh5Beg8BaMiHDAABQhxAAg5gDgEgQpBj8QCyAPBdgLQCVgRBWhQQAvgrAuhUIBOiMQA+heB9hlQCUhuBFg6QCXh7DMjzQEBkwBQhSQBRhSDRi3QC9imBghoQCTigCxkSICSjmQBXiKA+hZQCpjzDij3QDAjSD/jrQQavKQwm/QJCjxJmhqIEagvQCigeBzgkQBAgUBYgiICWg8QGhigG8g+IE2goQCygbB8gtQBsgnB9hJQBLgsCQhgQBshIA0gpQBWhDA2hDQBDhTAyh2QAlhaAjiGQCfpYhNn0Qgskch4j2QiAkFjGi4Qg7g3hfhKQhrhRg0gqQi9iXhUiGQh6jEAFkEQAGjwBujmQBdjDCtjMQB0iHDdjVQHKm4HfmhQhKgJhLgPQhNgQhYgZQiTgqiyhDQjLhSiMg2IiQg4QjKhLikgsQhFgSg+gNQjagskOgFIgkAAQi2gCkTAQQiFAHiEAKQ0SBZz+D3QikAfhlAYQiRAih0ApQh6AqiNBCQhmAxiXBQIlFCxQiNBLhvA4QgNA0giArQhHBbiWAeQg1ALjbAPQqXAsrMJTQiLBzikCaQhlBfi+C5QiHCEg/BAQhrBvhPBfQgzA9hiCCQhiCBg0A/QicC7jcC/QinCRj9C7QjcCiibBiQjTCFi/BQQjUBajJAeQjhAijIgqQhzgYiRg8Ij8hwQmgi4m9hnQm+honHgTQlbgOkXApQiDATihAmQhjAYi9AzI9kH7QiSAnhKAeQh3AvhNBDQgzAtg0BIQgWAfhBBlIgSAcQgIAfgLAgQgZBJg7BpQheCoiTDhQhUCBiqEAQk0HYiEFLQhRDLhCEJQgoCfhBFBQhkHrglD9Qg9GgAFFQQACCoAUDRQAMB4AfD/QAvF+AgDAQA1E9BMD1QA4C2BECEQBUChBwBsQBaBWCIBMQBTAuCqBOIRjH+QBXAoAsAQQBKAcA+AJQBQANBlgMQA8gHB3gYIQFjSQD5gyB8gRQDRgcCoAKQDUAOE1BeQBVAaCrA2QCYAwBpAaQC+AuDiAaQC0AVDyALQEoAOGEACIKsgBIBzAAQMQAAHTAmg");
	this.shape_15.setTransform(921.4458,539.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},1).wait(1));

	// background
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CCFF").s().p("EiXCBVuMAAAirbMEuFAAAMAAACrbg");
	this.shape_16.setTransform(969.15,548.575);

	this.bg_mc = new lib.bg();
	this.bg_mc.name = "bg_mc";
	this.bg_mc.setTransform(3024.3,644.95,1,1,0,0,0,0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.bg_mc}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(797.6,369.5,5161.9,920.4000000000001);
// library properties:
lib.properties = {
	id: 'ABD29290EF0D478AA3F9E1D1B9184120',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/opening.mp3?1734466942015", id:"opening"},
		{src:"sounds/start.mp3?1734466942015", id:"start"},
		{src:"sounds/guitar.mp3?1734466942015", id:"guitar"},
		{src:"sounds/clank.mp3?1734466942015", id:"clank"},
		{src:"sounds/quack.mp3?1734466942015", id:"quack"},
		{src:"sounds/rustle.mp3?1734466942015", id:"rustle"},
		{src:"sounds/breeze.mp3?1734466942015", id:"breeze"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ABD29290EF0D478AA3F9E1D1B9184120'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;