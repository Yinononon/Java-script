function centuries(years) {
    let century = 1
    if (years % 100 === 0) {
        century = years/100   
    } else {
        century = century + ((years/100) - ((years%100)/100))
    }
    return century
}

