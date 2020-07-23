class Rewards
{
    constructor(gold, xp, character)
    {
        this.gold = gold;
        this.xp = xp;
        this.character = character;
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
    }
}