class ShopEvent extends Event
{    
    constructor(name, description, items)
    {
        super(name, description);
        this.items = items;
    }
    
    buyItem(id)
    {
        var item = this.items.find(i => i.id == id);
        
        if (playerinfo.gold < item.price)
            return;
        
        playerinfo.changeGold(-item.price);
        item.rewards.giveRewards();
        $('#shop-event-item-' + item.id).prop('disabled', true);
    }
    
    createUI() { }
    
    doTick() {  }
    
    onClick()
    {
        $('#currentEvent').html('');
        
        for (var i in this.items)
        {
            var item = this.items[i]
            $('#currentEvent').append(
                '<div class="event"><button id="shop-event-item-' + item.id + '" class="event-button" onclick="currentEvent.buyItem(' + item.id + ');">' +
                    '<h3>' + item.name + '</h3>' +
                    '<p>' + item.description + '</p>' +
                    '<p>Cost: ' + item.price + '</p>' +
                '</button></div>'
            );
            if (item.bought)
                $('#shop-event-item-' + item.id).prop('disabled', true);
        }
        
        currentEvent = this;
    }
}

var shopEventItemidCounter = 0;

class ShopEventItem
{
    bought = false;
    
    constructor(name, description, price, rewards)
    {
        this.id = shopEventItemidCounter++;
        this.name = name;
        this.description = description;
        this.price = price;
        this.rewards = rewards;
    }
}