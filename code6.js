gdjs.EndCode = {};
gdjs.EndCode.GDbgObjects1= [];
gdjs.EndCode.GDbgObjects2= [];
gdjs.EndCode.GDRestartObjects1= [];
gdjs.EndCode.GDRestartObjects2= [];
gdjs.EndCode.GDYouWinObjects1= [];
gdjs.EndCode.GDYouWinObjects2= [];
gdjs.EndCode.GDStatsObjects1= [];
gdjs.EndCode.GDStatsObjects2= [];
gdjs.EndCode.GDEnemiesObjects1= [];
gdjs.EndCode.GDEnemiesObjects2= [];
gdjs.EndCode.GDPotionsUObjects1= [];
gdjs.EndCode.GDPotionsUObjects2= [];
gdjs.EndCode.GDPotionsGObjects1= [];
gdjs.EndCode.GDPotionsGObjects2= [];
gdjs.EndCode.GDManaObjects1= [];
gdjs.EndCode.GDManaObjects2= [];
gdjs.EndCode.GDHealthObjects1= [];
gdjs.EndCode.GDHealthObjects2= [];
gdjs.EndCode.GDTimePlayedObjects1= [];
gdjs.EndCode.GDTimePlayedObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};
gdjs.EndCode.conditionTrue_1 = {val:false};
gdjs.EndCode.condition0IsTrue_1 = {val:false};
gdjs.EndCode.condition1IsTrue_1 = {val:false};
gdjs.EndCode.condition2IsTrue_1 = {val:false};


gdjs.EndCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.EndCode.GDEnemiesObjects1.createFrom(runtimeScene.getObjects("Enemies"));
gdjs.EndCode.GDHealthObjects1.createFrom(runtimeScene.getObjects("Health"));
gdjs.EndCode.GDManaObjects1.createFrom(runtimeScene.getObjects("Mana"));
gdjs.EndCode.GDPotionsGObjects1.createFrom(runtimeScene.getObjects("PotionsG"));
gdjs.EndCode.GDPotionsUObjects1.createFrom(runtimeScene.getObjects("PotionsU"));
gdjs.EndCode.GDTimePlayedObjects1.createFrom(runtimeScene.getObjects("TimePlayed"));
{for(var i = 0, len = gdjs.EndCode.GDTimePlayedObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDTimePlayedObjects1[i].setString("Time played: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)))) + " seconds");
}
}{for(var i = 0, len = gdjs.EndCode.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDEnemiesObjects1[i].setString("Enemies defeated: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)))));
}
}{for(var i = 0, len = gdjs.EndCode.GDPotionsGObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDPotionsGObjects1[i].setString("Potions collected: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)))));
}
}{for(var i = 0, len = gdjs.EndCode.GDPotionsUObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDPotionsUObjects1[i].setString("Potions used: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)))));
}
}{for(var i = 0, len = gdjs.EndCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDHealthObjects1[i].setString("Damage taken: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)))));
}
}{for(var i = 0, len = gdjs.EndCode.GDManaObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDManaObjects1[i].setString("Mana used: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)))));
}
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition1IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11751956);
}
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


}; //End of gdjs.EndCode.eventsList0x5b70b8


gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDbgObjects1.length = 0;
gdjs.EndCode.GDbgObjects2.length = 0;
gdjs.EndCode.GDRestartObjects1.length = 0;
gdjs.EndCode.GDRestartObjects2.length = 0;
gdjs.EndCode.GDYouWinObjects1.length = 0;
gdjs.EndCode.GDYouWinObjects2.length = 0;
gdjs.EndCode.GDStatsObjects1.length = 0;
gdjs.EndCode.GDStatsObjects2.length = 0;
gdjs.EndCode.GDEnemiesObjects1.length = 0;
gdjs.EndCode.GDEnemiesObjects2.length = 0;
gdjs.EndCode.GDPotionsUObjects1.length = 0;
gdjs.EndCode.GDPotionsUObjects2.length = 0;
gdjs.EndCode.GDPotionsGObjects1.length = 0;
gdjs.EndCode.GDPotionsGObjects2.length = 0;
gdjs.EndCode.GDManaObjects1.length = 0;
gdjs.EndCode.GDManaObjects2.length = 0;
gdjs.EndCode.GDHealthObjects1.length = 0;
gdjs.EndCode.GDHealthObjects2.length = 0;
gdjs.EndCode.GDTimePlayedObjects1.length = 0;
gdjs.EndCode.GDTimePlayedObjects2.length = 0;

gdjs.EndCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
