import { User } from "lucia";

type Entity = {
  userId?: string;
  id?: string;
};

export const isOwner = (
  authUser: User | null | undefined,
  entity: Entity | null | undefined
) => {
  if (!authUser || !entity) {
    return false;
  }
  if (!entity.userId) {
    return false;
  }
  if (entity.userId !== authUser.id || entity.userId !== authUser.id) {
    return false;
  } else {
    return true;
  }
};
