var areas = {};

areas[area1Name] = new Area('area1', area1Name,
[
    new PropertyEvent(area1event1Name, 'This is your home'),
    new CombatEvent(area1event2Name, 'Killing rats in your home village will earn you some gold', 6, 1, 16,
        new Rewards(1, 1)
    ),
    
]);












areas[area1Name].unlocked = true;
areas[area1Name].events[0].unlocked = true;
areas[area1Name].events[1].unlocked = true;