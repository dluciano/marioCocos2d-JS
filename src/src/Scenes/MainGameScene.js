(function(){
    var MainGameScene = cc.Scene.extend({
        ctor: function () {
            this._super();
            this.animationLayer = new gm.AnimationLayer();
            this.addChild(new gm.WorldLayer(), 1);
            this.addChild(this.animationLayer, 2);
            //TODO: Remove this layer in production deployment!
            this.addChild(gm.ph.debugNode, 100);
            this.scheduleUpdate();
            return true;
        },
        update: function(dt){
            gm.ph.space.step(dt);
        },
        animationLayer: null
    });
    gm.MainGameScene = MainGameScene;
})();