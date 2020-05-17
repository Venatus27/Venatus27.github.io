
gdjs.evtsExt__Mana__Mana = gdjs.evtsExt__Mana__Mana || {};

/**
 * Behavior generated from 
 * @class Mana
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Mana__Mana.Mana = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Mana = behaviorData.Mana !== undefined ? behaviorData.Mana : Number("100") || 0;
    this._behaviorData.MaxMana = behaviorData.MaxMana !== undefined ? behaviorData.MaxMana : Number("100") || 0;
};

gdjs.evtsExt__Mana__Mana.Mana.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Mana::Mana", gdjs.evtsExt__Mana__Mana.Mana);

// Properties:
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext = {};
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects1= [];
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects2= [];

gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana()); }}}

}


}; //End of gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.eventsList0x5b7328


gdjs.evtsExt__Mana__Mana.Mana.prototype.Mana = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mana__Mana.Mana.prototype.ManaContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext = {};
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1= [];
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects2= [];

gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana() >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Usage")) || 0 : 0) ) {
        gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1[k] = gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMana(gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Usage")) || 0 : 0)));
}
}{runtimeScene.getGame().getVariables().get("ManaUsed").add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Usage")) || 0 : 0));
}}

}


}; //End of gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.eventsList0x5b7328


gdjs.evtsExt__Mana__Mana.Mana.prototype.Use = function(Usage, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "Usage") return Usage;
    return "";
  }
};

gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mana__Mana.Mana.prototype.UseContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext = {};
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1= [];
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects2= [];

gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana() < (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("magicNeeded")) || 0 : 0) ) {
        gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1[k] = gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


}; //End of gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.eventsList0x5b7328


gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnough = function(magicNeeded, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "magicNeeded") return magicNeeded;
    return "";
  }
};

gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mana__Mana.Mana.prototype.hasEnoughContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext = {};
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1= [];
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects2= [];

gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMana(gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("IncreaseValue")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxMana() > 0 ) {
        gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[k] = gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMana(Math.min((gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana()), (gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxMana())));
}
}}

}


}; //End of gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.eventsList0x5b7328


gdjs.evtsExt__Mana__Mana.Mana.prototype.HealMana = function(IncreaseValue, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "IncreaseValue") return IncreaseValue;
    return "";
  }
};

gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mana__Mana.Mana.prototype.HealManaContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext = {};
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1= [];
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects2= [];

gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMana((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


{


gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.condition0IsTrue_0.val = false;
{
}if (gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.condition0IsTrue_0.val) {
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMana(Math.min((gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMana()), (gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxMana())));
}
}}

}


}; //End of gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.eventsList0x5b7328


gdjs.evtsExt__Mana__Mana.Mana.prototype.SetMana = function(Value, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    if (objectName === "Object") { return thisObjectList; }    var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  }
};

gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Mana__Mana.Mana.prototype.SetManaContext.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__Mana__Mana.Mana.prototype._getMana = function() {
    return this._behaviorData.Mana !== undefined ? this._behaviorData.Mana : Number("100") || 0;
};
gdjs.evtsExt__Mana__Mana.Mana.prototype._setMana = function(newValue) {
    this._behaviorData.Mana = newValue;
};
gdjs.evtsExt__Mana__Mana.Mana.prototype._getMaxMana = function() {
    return this._behaviorData.MaxMana !== undefined ? this._behaviorData.MaxMana : Number("100") || 0;
};
gdjs.evtsExt__Mana__Mana.Mana.prototype._setMaxMana = function(newValue) {
    this._behaviorData.MaxMana = newValue;
};
