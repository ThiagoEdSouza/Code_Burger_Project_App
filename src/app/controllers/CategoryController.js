import * as Yup from 'yup'

import Category from '../models/Category'

class CategoryController{
  async store(request, response){

    const schema = Yup.object().shape({
      name: Yup.string().required(),  //Tipo string e obrigatório
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false}) //Operação abortEarly é para que o validador não pare no primeiro erro, mas indique todos.
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name } = request.body

    const categoryExists = await Category.findOne({
      where: {
        name,
      },
    })

    if (categoryExists) {
      return response.status(400).json({ error: 'Category already exists.' })
    }

    const { id } = await Category.create({ name })

    return response.json({ name, id })
  } 
  
  async index(request, response){
    const categories = await Category.findAll()

    return response.json(categories)
  }
  
  catch (err) {
    console.log(err)
  }

  

}

export default new CategoryController()