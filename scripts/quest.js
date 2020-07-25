var questIdCounter = 0;

class Quest
{
    unlocked = false;
    completed = false;
    amount = 0;
    
    constructor(name, amountRequired, description, rewards)
    {
        this.id = questIdCounter++;
        this.name = name;
        this.amountRequired = amountRequired;
        this.description = description;
        this.rewards = rewards;
    }
    
    addProgress()
    {
        if (!this.unlocked || this.completed)
            return;
        
        this.amount++;
        $('#quest-amount-' + this.id).html(this.amount);
        if (this.amount >= this.amountRequired)
        {
            this.completed = true;
            this.rewards.giveRewards();
            $('#quest-' + this.id).remove();
        }
    }
    
    updateUI()
    {
        if (this.unlocked && !this.completed)
        {
            $('#quests').append(
                '<div id="quest-' + this.id + '" class="quest">' +
                    '<h3 class="quest-name">' + this.name + '</h3>' +
                    '<div><span id="quest-amount-' + this.id + '">' + this.amount + '</span>/' + this.amountRequired + ' ' + this.description + '</div>' +
                '</div>'
            )
        }
    }
    
    save(questSaveObject)
    {
        questSaveObject[this.id] = { amount: this.amount, unlocked: this.unlocked, completed: this.completed };
    }
    
    load(questSaveObject)
    {
        var questObj = questSaveObject[this.id];
        if (questObj === undefined)
            return;
        
        this.amount = questObj.amount;
        this.unlocked = questObj.unlocked;
        this.completed = questObj.completed;
    }
}
