var areas = {};

areas[area1Name] = new Area('area1', area1Name,
[
    new PropertyEvent(area1event1Name, 'This is your home', 'property1',
    [
        new PropertyEventUpgrade(10, 1, 'Build spare bedroom', 'You can rent out this room for money'),
        new PropertyEventUpgrade(100, 4, 'Build second floor', 'More rooms to rent out'),
        new PropertyEventUpgrade(500, 10, 'Turn house into small inn', 'Make a living out of this renting out'),
        new PropertyEventUpgrade(5000, 30, 'Build inn bigger', 'Even more rooms to rent out')
    ]),
    new CombatEvent(area1event2Name, 'Killing rats in your home village will earn you some gold', 6, 1, 16,
        new Rewards(1, 1)
    ),
    
]);












areas[area1Name].unlocked = true;
areas[area1Name].events[0].unlocked = true;
areas[area1Name].events[1].unlocked = true;