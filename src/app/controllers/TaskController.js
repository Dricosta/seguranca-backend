import Task from '../models/Task';

class TaskController {
  async index(req, res){
    const tasks = await Task.findAll();
    return res.json(tasks);
  }

  async store(req, res) {
    // const userExists = await User.findOne({ where: { email: req.body.email } });

    // if (userExists) {
    //   return res.status(400).json({ error: 'O usuário já existe' });
    // }

    const  { title, description, points } = req.body

    const TaskCreate = await Task.create({
        title,
        description,
        points
    });

    return res.json(TaskCreate);
  }

  async update(req, res) {
    const { id } = req.params;

    const taskFindById = await Task.findOne({ where: { id }});

    if(!taskFindById){
      return res.status(404).json({ message: "task não encontrada."})
    }

    await taskFindById.update(req.body);


    return res.status(200).json(taskFindById);
  }

  async delete(req, res){
    const { id } = req.params

    await Task.destroy({ where: { id: id }})

    return res.status(200).json({ message: "task deletada com sucesso"});

  }
}

export default new TaskController();
