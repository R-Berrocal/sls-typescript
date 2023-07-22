import { formatJSONResponse } from '@libs/api-gateway';
import { container } from 'src/config/inversify.config';
import { UserService } from 'src/users/services/user.service';

export const main = async () => {
  try {
    const userService = container.get(UserService);
    return formatJSONResponse({
      result: userService.findAll(),
    });
  } catch (error) {
    return formatJSONResponse({
      error: error.message,
    });
  }
};
