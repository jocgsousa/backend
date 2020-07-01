import File from '../models/File';

class FileController {
  async store(request, response) {
    const { filename: path, originalname: name } = request.file;
    const upload = await File.create({
      name,
      path,
    });
    return response.json(upload);
  }
}
export default new FileController();
