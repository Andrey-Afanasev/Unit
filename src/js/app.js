let indicators = {name: 'Маг', health: 90};

export default function life(indicators) {
    let  indicator
    if (indicators.health > 50) {
        indicator = "healthy"
    } else if (indicators.health < 15) {
        indicator = "critical"
    } else {
        indicator = "wounded"
    }

}

life(indicators)