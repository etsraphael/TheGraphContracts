import { setAccountEvent } from '../generated/Member/User';
import { createOrLoadUser } from '../service/user';

export function handlesetAccountEvent(event: setAccountEvent): void {
  let user = createOrLoadUser(
    event.params.member.owner,
    event.params.member.userName,
    event.block.timestamp
  );
  user.save();
}
