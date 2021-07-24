import { getCustomRepository } from 'typeorm';

import { ComplimentsRepository } from '../repositories/ComplimentsRepository';

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({ user_receiver: user_id });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
