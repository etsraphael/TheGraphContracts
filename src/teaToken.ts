import { Approval, Transfer } from "../generated/Token/Contract"
import { setUpBalanceAccount } from "../service/user"

export function handleApproval(event: Approval): void { }

export function handleTransfer(event: Transfer): void {

  let to = event.params.to
  let from = event.params.from
  let value = event.params.value
  let userTo = setUpBalanceAccount(to, event.block.timestamp)
  let userFrom = setUpBalanceAccount(from, event.block.timestamp)
  
  userTo.balance = userTo.balance.plus(value)
  userFrom.balance = userFrom.balance.minus(value)

  userTo.save()
  userFrom.save()

}
