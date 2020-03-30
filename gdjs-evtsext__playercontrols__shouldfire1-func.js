gdjs.evtsExt__PlayerControls__ShouldFire1 = {};

gdjs.evtsExt__PlayerControls__ShouldFire1.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayerControls__ShouldFire1.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayerControls__ShouldFire1.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PlayerControls__ShouldFire1.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlayerControls__ShouldFire1.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PlayerControls__ShouldFire1.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.evtsExt__PlayerControls__ShouldFire1.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


}; //End of gdjs.evtsExt__PlayerControls__ShouldFire1.eventsList0x5b7328


gdjs.evtsExt__PlayerControls__ShouldFire1.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
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


gdjs.evtsExt__PlayerControls__ShouldFire1.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

