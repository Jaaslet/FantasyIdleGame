properties = [];

class PropertyEvent extends Event
{
    constructor(name, description, divId, propertyUpgrades)
    {
        super(name, description);
        this.propertyUpgrades = propertyUpgrades;
        this.divId = divId;
    }
    
    doTick() { }
    
    getIncome() //TODO: this could be a lot more effective
    {
        return this.propertyUpgrades.reduce((result, p) =>
        {
            if (p.unlocked)
                return p.income;
            else
                return result;
        }, 0);
    }
    
    createUI()
    {
        if (this.unlocked)
        {
            playerinfo.income += this.getIncome();
            properties.push(this);
            
            $('#properties').append(
                '<div id="' + this.divId + '" class="property">' +
                    '<h3 class="property-name">' + this.name + '</h3>' +
                    '<div>Gold/sec: <span id="' + this.divId + '-income">' + this.getIncome() + '</span></div>' +
                '</div>'
            )
        }
    }
    
    buyUpgrade()
    {
        var oldIncome = this.getIncome();
        
        for (var i in this.propertyUpgrades)
        {
            var upgrade = this.propertyUpgrades[i];
            if (!upgrade.unlocked)
            {
                if (playerinfo.gold < upgrade.price)
                    return;
                
                playerinfo.changeGold(-upgrade.price);
                upgrade.unlocked = true;
                playerinfo.income += upgrade.income - oldIncome;
                
                if (upgrade.newName !== undefined)
                    this.updateName(upgrade.newName);
                
                $('#' + this.divId + '-income').html(upgrade.income);
                this.onClick();
                
                return;
            }
        }
    }
    
    onClick()
    {
        $('#currentEvent').html(
            '<div class="event"><button class="event-button" onclick="PropertyEvent.rest();"><h3>Rest</h3></button></div>'
        );
        
        for (var i in this.propertyUpgrades)
        {
            var upgrade = this.propertyUpgrades[i];
            if (upgrade.newName !== undefined && upgrade.unlocked)
                this.updateName(upgrade.newName);
            
            if (!upgrade.unlocked)
            {
                $('#currentEvent').append(
                    '<div class="event"><button class="event-button" onclick="currentEvent.buyUpgrade();">' +
                        '<h3>' + upgrade.name + '</h3>' +
                        '<p>' + upgrade.description + '</p>' +
                        '<p>Cost: ' + upgrade.price + '. Gold/sec: ' + upgrade.income + '</p>' +
                    '</button></div>'
                );
                
                break;
            }
        }
        
        currentEvent = this;
    }
    
    save(eventSaveObj)
    {
        super.save(eventSaveObj);
        
        var upgradesSaveObj = {};
        for (var i in this.propertyUpgrades)
            upgradesSaveObj[this.propertyUpgrades[i].id] = { unlocked: this.propertyUpgrades[i].unlocked };
        eventSaveObj[this.id]['propertyUpgrades'] = upgradesSaveObj;
    }
    
    load(eventSaveObj)
    {
        if (eventSaveObj === undefined)
            return;
        
        super.load(eventSaveObj);
        
        if (eventSaveObj[this.id]['propertyUpgrades'] === undefined)
            return;
        
        for (var i in this.propertyUpgrades)
            if (eventSaveObj[this.id]['propertyUpgrades'][this.propertyUpgrades[i].id] !== undefined)
                this.propertyUpgrades[i].unlocked = eventSaveObj[this.id]['propertyUpgrades'][this.propertyUpgrades[i].id]['unlocked'];
    }
    
    static rest()
    {
        playerinfo.currentHp = playerinfo.hp;
        $('#playerinfo-hp-amount').html(playerinfo.currentHp);
    }
}

var propertyEventUpgradeIdCounter = 0;

class PropertyEventUpgrade
{
    unlocked = false;
    
    constructor(price, income, name, description, newName)
    {
        this.id = propertyEventUpgradeIdCounter++;
        this.price = price;
        this.income = income;
        this.name = name;
        this.description = description;
        this.newName = newName;
    }
}