var eventFunctions = {};
var currentEvent = undefined;

class Event
{
    unlocked = false;
    
    constructor(name, description, type)
    {
        this.name = name;
        this.description = description;
        this.type = type;
    }
        
        
    getUI()
    {
        if (this.unlocked)
        {
            eventFunctions[this.name] = this;
            return (
                '<div class="event">' +
                    '<button class="event-button" onclick="eventFunctions[\'' + this.name + '\'].onClick()">' +
                        '<h3>' + this.name + '</h3>' +
                        '<p>' + this.description + '</p>' +
                    '</button>' +
                '</div>'
            );
        }
        else
            return "";
    }
}