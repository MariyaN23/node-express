//MongoDB, noSQL, denormalization (data duplication)

//collection 1
type UserMongo = {
    id: number //auto inc - db task
    firstName: string
    lastName: string
    passportNumber: string
    wallets: Array<{
        id: string //uuid - app level
        title: string
    }> //1..*
    profile: {
        hobby: string
        education: string
    } //1..1
    sharedWalletsIds: {
        title: string
        id: number,
        currency: 'USD' | 'BTC' | 'BYN'
    }[] //*..*
}

type WalletMongo = {
    id: string //PK🔑 uuid - app level
    title: string
    currency: 'USD' | 'BTC' | 'BYN'
    ownerId: number //ForeignKey 🔑
    sharedWithUsers: {
        fullName: string
        userId: number
    }[] //*..*
}