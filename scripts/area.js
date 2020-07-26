var areaIdCounter = 0;

class Area
{
    unlocked = false;
    
    constructor(divId, name, events)
    {
        this.divId = divId;
        this.name = name;
        this.events = events;
        this.id = areaIdCounter++;
    }
        
        
    updateUI()
    {
        if (this.unlocked)
        {
            $('#areas').append(
                '<div id="' + this.divId + '" class="area">' +
                    '<h1 class="area-name">' + this.name + '</h1>' +
                    '<div class="events">' +
                        this.events.reduce((result, e) => result + e.getUI(), '') +
                    '</div>' +
                '</div>'
            );
        }
    }
    
    save(areasSaveObj)
    {
        var eventsSaveObj = {};
        for (var i in this.events)
            this.events[i].save(eventsSaveObj);
        
        areasSaveObj[this.id] =
        {
            events: eventsSaveObj,
            unlocked: this.unlocked
        }
    }
    
    load(areasSaveObj)
    {
        var saveObj = areasSaveObj[this.id];
        var eventObj = undefined;
        if (saveObj !== undefined)
        {
            this.unlocked = saveObj['unlocked'];
            eventObj = saveObj['events'];
        }
        
        
        for (var i in this.events)
            this.events[i].load(eventObj);
    }
}