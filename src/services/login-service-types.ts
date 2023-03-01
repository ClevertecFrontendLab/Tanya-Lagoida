export type TAuthorizationRequest = {
    identifier: string
    password: string
}
export type TUserType = {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    phone: string
}
export type TAuthorizationResponse = {
    jwt: string
    user: TUserType
}

