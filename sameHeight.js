sameHeight = new function(){
	this.baseClass="same-height";
	this.groupProperty="same-height-group";
	
	this.processAll=function(){
		jQuery('.'+sameHeight.baseClass).css('height','');
		jQuery('.'+sameHeight.baseClass+'-xs').css('height','');
		jQuery('.'+sameHeight.baseClass+'-sm').css('height','');
		jQuery('.'+sameHeight.baseClass+'-md').css('height','');
		jQuery('.'+sameHeight.baseClass+'-lg').css('height','');
		
		var cssConditionSM, cssConditionMD, cssConditionLG;
		var cssConditionCompatible=false;
		if (typeof window.matchMedia === 'function'){
		    cssConditionCompatible=true;
		}
		if (cssConditionCompatible){
		    cssConditionSM = window.matchMedia('(min-width: 768px)');
		    cssConditionMD = window.matchMedia('(min-width: 992px)');
		    cssConditionLG = window.matchMedia('(min-width: 1200px)');
		}
		
		sameHeight.processClass(sameHeight.baseClass);
		sameHeight.processClass(sameHeight.baseClass+'-xs');
		if ((cssConditionCompatible && cssConditionSM.matches) || (!cssConditionCompatible && jQuery(window).width()>=768)){
			sameHeight.processClass(sameHeight.baseClass+'-sm');
		}
		if ((cssConditionCompatible && cssConditionMD.matches) || (!cssConditionCompatible && jQuery(window).width()>=992)){
			sameHeight.processClass(sameHeight.baseClass+'-md');
		}
		if ((cssConditionCompatible && cssConditionLG.matches) || (!cssConditionCompatible && jQuery(window).width()>=1200)){
			sameHeight.processClass(sameHeight.baseClass+'-lg');
		}
		
	};
	
	this.processClass=function(currentClass){
		var selection = jQuery('.'+currentClass);
		var available_groups = [];//new Array
		selection.each(
			function(){
				if(jQuery(this).attr(sameHeight.groupProperty) === undefined){
					if(available_groups.indexOf(null)<0){
						available_groups.push(null);
					}
				}
				else{
					if(available_groups.indexOf(jQuery(this).attr(sameHeight.groupProperty))<0){
						available_groups.push(jQuery(this).attr(sameHeight.groupProperty));
					}
				}
			}
		);
		jQuery.each(available_groups,
			function(index,value){
				sameHeight.processGroup(currentClass,value);
			}
		);
		
	};
	
	this.processImage=function (currentClass){
	   var group = jQuery(this).parent('.'+currentClass).attr(sameHeight.groupProperty);
	   if (group === undefined){
	       group=null;
	   }
	   sameHeight.processGroup(currentClass, group);
	    
	};
	
	this.processGroup=function (currentClass, currentGroup){
		var selection;
		if (currentGroup === null) {
			selection = jQuery('.'+currentClass+':not(['+sameHeight.groupProperty+'])');
		}
		else{
			selection = jQuery('.'+currentClass+'['+sameHeight.groupProperty+'='+currentGroup+']');
		}
		var children_heights = [];
		selection.each(
			function(){children_heights.push(parseInt(jQuery(this).height()));}
		);
		selection.height(Math.max.apply(null,children_heights));
	};
	
};
//We process all the classes as soon as the DOM is ready
jQuery(document).ready(function(){sameHeight.processAll();});

//We process every image after it loads. Just in case it was after document ready
jQuery('.'+sameHeight.baseClass+' img').on('load', function(){sameHeight.processImage(sameHeight.baseClass);});
jQuery('.'+sameHeight.baseClass+'-xs img').on('load',function(){sameHeight.processImage(sameHeight.baseClass+'-xs');});
jQuery('.'+sameHeight.baseClass+'-sm img').on('load', function(){sameHeight.processImage(sameHeight.baseClass+'-sm');});
jQuery('.'+sameHeight.baseClass+'-md img').on('load', function(){sameHeight.processImage(sameHeight.baseClass+'-md');});
jQuery('.'+sameHeight.baseClass+'-lg img').on('load', function(){sameHeight.processImage(sameHeight.baseClass+'-lg');});

//When all media has loaded, we reprocess everything to make sure calculations don't have to be remade.
jQuery(window).on('load', function(){sameHeight.processAll();});

//If the window changes size, we have to recalculate
jQuery(window).resize(function(){sameHeight.processAll();});