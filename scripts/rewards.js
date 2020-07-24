class Rewards
{
    constructor(gold, xp, character, unlockQuest, unlockEvent, questProgress)
    {
        this.gold = gold;
        this.xp = xp;
        this.character = character;
        this.unlockQuest = unlockQuest;
        this.unlockEvent = unlockEvent;
        this.questProgress = questProgress;
    }
    
    giveRewards()
    {
        if (this.gold !== undefined)
            playerinfo.changeGold(this.gold);
        if (this.xp !== undefined)
        {
            for (var characterName in characters)
            {
                characters[characterName].addXp(this.xp);
            }
        }
        if (this.character !== undefined)
        {
            
            characters[this.character].unlocked = true;
            characters[this.character].updateUI();
            playerinfo.updateUI();
        }
        if (this.unlockQuest !== undefined)
        {
            quests[this.unlockQuest].unlocked = true;
            quests[this.unlockQuest].updateUI();
        }
        if (this.unlockArea !== undefined)
        {
            eventFunctions[this.unlockEvent].unlocked = true;
            //TODO: update area, after worldmap function is created
        }
        if (this.questProgress !== undefined)
        {
            quests[this.questProgress].addProgress();
        }
    }
}