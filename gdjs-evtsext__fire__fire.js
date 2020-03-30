
gdjs.evtsExt__Fire__Fire = gdjs.evtsExt__Fire__Fire || {};

/**
 * Behavior generated from 
 * @class Fire
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__Fire__Fire.Fire = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
};

gdjs.evtsExt__Fire__Fire.Fire.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("Fire::Fire", gdjs.evtsExt__Fire__Fire.Fire);

// Properties:
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext = {};
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDObjectObjects1= [];
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDObjectObjects2= [];
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1= [];
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects2= [];

gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95Fire_95_95Fire_46Fire_46prototype_46FireContext_46GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1});gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.eventsList0x5b7088 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.mapOfGDgdjs_46evtsExt_95_95Fire_95_95Fire_46Fire_46prototype_46FireContext_46GDProjectileObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("XPos")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("YPos")) || 0 : 0), "");
}{for(var i = 0, len = gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Speed")) || 0 : 0), 1);
}
}}

}


}; //End of gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.eventsList0x5b7088


gdjs.evtsExt__Fire__Fire.Fire.prototype.Fire = function(XPos, YPos, Projectile, Angle, Speed, parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Projectile": Projectile
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
if (argName === "XPos") return XPos;
if (argName === "YPos") return YPos;
if (argName === "Angle") return Angle;
if (argName === "Speed") return Speed;
    return "";
  }
};

gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects1.length = 0;
gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.GDProjectileObjects2.length = 0;

gdjs.evtsExt__Fire__Fire.Fire.prototype.FireContext.eventsList0x5b7088(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

