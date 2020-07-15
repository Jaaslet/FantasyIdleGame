class Rewards
{
    constructor(gold, xp)
    {
        this.gold = gold;
        this.xp = xp;
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
    }
}