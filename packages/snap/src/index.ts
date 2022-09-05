import { JsonRpcId, JsonRpcVersion } from "@metamask/types";

module.exports.onRpcRequest = async ({ request }: {
  origin: string;
  request: UpdateProfileRequest | GetProfileRequest | ClearProfileRequest | RandomizeAvatarRequest
}) => {
  switch (request.method) {
    case 'get_profile':
      return { profile: {}}
    default:
      throw new Error('Method not found.');
  }
};

const RANDOM_PIC_API= "https://picsum.photos/200"
type UpdateProfileRequest = JsonRpcRequest<{avatarUrl:string, screenName:string, address:string,bio:string }, 'update_profile'>
type GetProfileRequest = JsonRpcRequest<{}, 'get_profile'>
type RandomizeAvatarRequest = JsonRpcRequest<{}, 'randomize_avatar'>
type ClearProfileRequest = JsonRpcRequest<{}, 'clear_profile'>

interface SnapState {
  profile?: Profile
}
interface Profile {
  address: string,
  avatarUrl?: string,
  screenName?: string,
  ens?: string,
  bio: string
}

interface JsonRpcRequest<T, M> {
  jsonrpc: JsonRpcVersion;
  method: M,
  id: JsonRpcId;
  params?: T;
}