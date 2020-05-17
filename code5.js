gdjs.GameOverCode = {};
gdjs.GameOverCode.GDbgObjects1= [];
gdjs.GameOverCode.GDbgObjects2= [];
gdjs.GameOverCode.GDRestartObjects1= [];
gdjs.GameOverCode.GDRestartObjects2= [];
gdjs.GameOverCode.GDYouLoseObjects1= [];
gdjs.GameOverCode.GDYouLoseObjects2= [];
gdjs.GameOverCode.GDStatsObjects1= [];
gdjs.GameOverCode.GDStatsObjects2= [];
gdjs.GameOverCode.GDEnemiesObjects1= [];
gdjs.GameOverCode.GDEnemiesObjects2= [];
gdjs.GameOverCode.GDPotionsUObjects1= [];
gdjs.GameOverCode.GDPotionsUObjects2= [];
gdjs.GameOverCode.GDPotionsGObjects1= [];
gdjs.GameOverCode.GDPotionsGObjects2= [];
gdjs.GameOverCode.GDManaObjects1= [];
gdjs.GameOverCode.GDManaObjects2= [];
gdjs.GameOverCode.GDHealthObjects1= [];
gdjs.GameOverCode.GDHealthObjects2= [];
gdjs.GameOverCode.GDTimePlayedObjects1= [];
gdjs.GameOverCode.GDTimePlayedObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};
gdjs.GameOverCode.condition2IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDEnemiesObjects1.createFrom(runtimeScene.getObjects("Enemies"));
gdjs.GameOverCode.GDHealthObjects1.createFrom(runtimeScene.getObjects("Health"));
gdjs.GameOverCode.GDManaObjects1.createFrom(runtimeScene.getObjects("Mana"));
gdjs.GameOverCode.GDPotionsGObjects1.createFrom(runtimeScene.getObjects("PotionsG"));
gdjs.GameOverCode.GDPotionsUObjects1.createFrom(runtimeScene.getObjects("PotionsU"));
gdjs.GameOverCode.GDTimePlayedObjects1.createFrom(runtimeScene.getObjects("TimePlayed"));
{for(var i = 0, len = gdjs.GameOverCode.GDTimePlayedObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDTimePlayedObjects1[i].setString("Time played: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)))) + " seconds");
}
}{for(var i = 0, len = gdjs.GameOverCode.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEnemiesObjects1[i].setString("Enemies defeated: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPotionsGObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPotionsGObjects1[i].setString("Potions collected: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDPotionsUObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDPotionsUObjects1[i].setString("Potions used: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDHealthObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDHealthObjects1[i].setString("Damage taken: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)))));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDManaObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDManaObjects1[i].setString("Mana used: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)))));
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition1IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11733004);
}
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
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


}; //End of gdjs.GameOverCode.eventsList0x5b70b8


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDbgObjects1.length = 0;
gdjs.GameOverCode.GDbgObjects2.length = 0;
gdjs.GameOverCode.GDRestartObjects1.length = 0;
gdjs.GameOverCode.GDRestartObjects2.length = 0;
gdjs.GameOverCode.GDYouLoseObjects1.length = 0;
gdjs.GameOverCode.GDYouLoseObjects2.length = 0;
gdjs.GameOverCode.GDStatsObjects1.length = 0;
gdjs.GameOverCode.GDStatsObjects2.length = 0;
gdjs.GameOverCode.GDEnemiesObjects1.length = 0;
gdjs.GameOverCode.GDEnemiesObjects2.length = 0;
gdjs.GameOverCode.GDPotionsUObjects1.length = 0;
gdjs.GameOverCode.GDPotionsUObjects2.length = 0;
gdjs.GameOverCode.GDPotionsGObjects1.length = 0;
gdjs.GameOverCode.GDPotionsGObjects2.length = 0;
gdjs.GameOverCode.GDManaObjects1.length = 0;
gdjs.GameOverCode.GDManaObjects2.length = 0;
gdjs.GameOverCode.GDHealthObjects1.length = 0;
gdjs.GameOverCode.GDHealthObjects2.length = 0;
gdjs.GameOverCode.GDTimePlayedObjects1.length = 0;
gdjs.GameOverCode.GDTimePlayedObjects2.length = 0;

gdjs.GameOverCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
