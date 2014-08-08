/*

	ractive-transitions-velocity
	============================

	Version 0.1.0.

	<< description goes here... >>

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-transitions-velocity.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-transitions-velocity' );

	<< more specific instructions for this plugin go here... >>

*/

(function ( global, factory ) {

	'use strict';

	// AMD environment
	if ( typeof define === 'function' && define.amd ) {
		define([ 'ractive', 'jquery' ], factory );
	}

	// Common JS (i.e. node/browserify)
	else if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ), require('jquery') );
	}

	// browser global
	else if ( global.Ractive && global.jQuery ) {
		factory( global.Ractive, global.jQuery );
	}

	else {
		throw new Error( 'Could not find Ractive or jQuery! It must be loaded before the ractive-transitions-velocity plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive, jQuery ) {

	'use strict';

	if(!jQuery.Velocity) throw new Error( 'Could not find Velocity! It must be loaded before the ractive-transitions-velocity plugin');
	var Velocity = jQuery.Velocity;

	function add_transition(fx_name){
        	Ractive.transitions[fx_name] = function(t, params){
            		Velocity.animate([t.node],fx_name,t.processParams(params,{complete:t.complete}));
        	};
    	}
	if(Velocity.Sequences){
    		for(var fx_name in Velocity.Sequences){
        		if(Velocity.Sequences.hasOwnProperty(fx_name)){
            			add_transition(fx_name);
        		}
    		}
	}
	
	Ractive.transitions.velocity = function(t, props, opts){
		opts = t.processParams(opts);
		opts.complete = t.complete;
		Velocity.animate([t.node],props,opts);
	};

}));
