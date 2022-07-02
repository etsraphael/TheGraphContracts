import { User } from "../generated/schema"
import { BigInt, Bytes } from '@graphprotocol/graph-ts'

export function createOrLoadUser(
  address: Bytes,
  userName: String,
  timestamp: BigInt
): User {
  let user = User.load(address.toHexString())
  if (user == null) {
    user = new User(address.toHexString())
    user.userName = userName.toString()
    user.createdAt = timestamp
    user.balance = BigInt.fromI32(0)
    user.save()
  }

  return user as User
}