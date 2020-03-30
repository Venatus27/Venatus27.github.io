gdjs.evtsExt__PlayerControls__HandlePlayerMovement = {};
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1= [];
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects2= [];

gdjs.evtsExt__PlayerControls__HandlePlayerMovement.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.eventsList0x5b7328 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val) {
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.createFrom(eventsFunctionContext.getObjects("Player"));
{for(var i = 0, len = gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val) {
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.createFrom(eventsFunctionContext.getObjects("Player"));
{for(var i = 0, len = gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


{


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val) {
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.createFrom(eventsFunctionContext.getObjects("Player"));
{for(var i = 0, len = gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.evtsExt__PlayerControls__HandlePlayerMovement.condition0IsTrue_0.val) {
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.createFrom(eventsFunctionContext.getObjects("Player"));
{for(var i = 0, len = gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


}; //End of gdjs.evtsExt__PlayerControls__HandlePlayerMovement.eventsList0x5b7328


gdjs.evtsExt__PlayerControls__HandlePlayerMovement.func = function(runtimeScene, Player, TopDownMovement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
},
  _behaviorNamesMap: {
"TopDownMovement": TopDownMovement
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

gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects1.length = 0;
gdjs.evtsExt__PlayerControls__HandlePlayerMovement.GDPlayerObjects2.length = 0;

gdjs.evtsExt__PlayerControls__HandlePlayerMovement.eventsList0x5b7328(runtimeScene, eventsFunctionContext);
return;
}

