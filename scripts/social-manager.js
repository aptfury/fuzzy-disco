// Creating a friend entry
class socialProfile {
    constructor(actor, actorId, friend, friendId) {
        this.actor = actor;
        this.actorId = actorId;
        this.friend = friend;
        this.friendId = friendId;
        this.lvl = 0;
        this.max_lvl = 100;
    }

    // GM only - at least for now
    overrideLvl(newLvl) {
        this.lvl = newLvl;
    };

    // GM only - at least for now
    overrideMax(newMax) {
        this.max_lvl = newMax;
    };

    updateLvl(x) {
        this.lvl += x;
    };

    // Future update
    history() {

    };
}