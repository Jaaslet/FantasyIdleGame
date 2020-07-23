var eventFunctions = {};
var currentEvent = undefined;
var eventId = 0;

class Event
{
    unlocked = false;
    
    constructor(name, description)
    {
        this.name = name;
        this.description = description;
        this.id = eventId++;
    }
        
        
    getUI()
    {
        if (this.unlocked)
        {
            eventFunctions[this.name] = this;
            return (
                '<div class="event">' +
                    '<button id ="event-' + this.id + '" class="event-button" onclick="eventFunctions[\'' + this.name + '\'].onClick()">' +
                        '<h3>' + this.name + '</h3>' +
                        '<p>' + this.description + '</p>' +
                    '</button>' +
                '</div>'
            );
        }
        else
            return "";
    }
    
    updateName(newName)
    {
        this.name = newName;
        $('#event-' + this.id + ' h3').html(this.name);
    }
    
    save(eventSaveObj)
    {
        eventSaveObj[this.id] = { unlocked: this.unlocked };
    }
    
    load(eventSaveObj)
    {
        if (eventSaveObj[this.id] === undefined)
            return;
        
        this.unlocked = eventSaveObj[this.id].unlocked;
    }
}