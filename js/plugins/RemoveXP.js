(() => {
    const skipActorIds = [1, 2, 3, 4]; // Edit this line to change which actors are skipped

    BattleManager.gainExp = function() {
        const exp = this._rewards.exp;
        for (const actor of $gameParty.allMembers()) {
            if (!skipActorIds.includes(actor.actorId())) {
                actor.gainExp(exp);
            }
        }
    };

    const _Window_StatusBase_drawActorLevel = Window_StatusBase.prototype.drawActorLevel;
    Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
        if (!skipActorIds.includes(actor.actorId())) {
            _Window_StatusBase_drawActorLevel.call(this, actor, x, y);
        }
    };

    const _Window_Status_drawExpInfo = Window_Status.prototype.drawExpInfo;
    Window_Status.prototype.drawExpInfo = function(x, y) {
        const actor = this._actor;
        if (!skipActorIds.includes(actor.actorId())) {
            _Window_Status_drawExpInfo.call(this, x, y);
        }
    };
})();