import User from '../models/User';
import File from '../models/File';

class ProvidersController {
  async index(request, response) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['name', 'email', 'avatar_id'],
      include: [{
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url'],
      }],
    });
    if (providers <= 0) {
      return response.status(401).json({ error: 'Sem provedores de serviço no momento' });
    }

    return response.json(providers);
  }
}
export default new ProvidersController();
