//SQL

//table 1
type UserSQL = {
    id: number //auto inc - db task
    firstName: string
    lastName: string
    passportNumber: string
}

//table 2
type Wallet = {
    id: string //PrimaryKey 🔑uuid - app level
    title: string
    currency: 'USD' | 'BTC' | 'BYN'
    ownerId: number //ForeignKey 🔑 // *..1
}

type Profile = {
    userId: number //FK 🔑
    hobby: string
    education: string
}

type WalletsSharing = {
    id: string //PK 🔑
    walletId: string //FK 🔑
    userId: number //FK 🔑
    addedDate: Date
    status: 'Paused' | 'Active' | 'Deleted'
}


type WalletSharingLimits = {
    walletSharingId: string //FK 🔑
    limitPerDay: number
    limitPerWeek: number
    limitPerMonth: number
}