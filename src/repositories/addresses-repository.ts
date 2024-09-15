const addresses = [{id: 1, value: 'Nezavisimosti, 18'}, {id: 2, value: 'Oktyabrskaya, 16'}]

export const addressesRepository = {
    findAddress(value: string | null | undefined) {
        if (value) {
            return addresses.filter(p => p.value.indexOf(value) > -1)
        } else {
            return addresses
        }
    },
    findAddressById(id: number) {
        return addresses.find(p => p.id === id)
    },
}