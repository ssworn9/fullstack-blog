import { HashTagDTO } from '../../common/contracts/HashTagDTO';

type GetAllTagsMethod = () => Promise<HashTagDTO[]>;

export interface IHashTagRepository {
  getAllTags: GetAllTagsMethod;
}
