import * as Yup from 'yup'
import Product from '../models/Product'
import Category from '../models/Category'

class ProductController{
  async store(request, response){

    const schema = Yup.object().shape({
      name: Yup.string().required(),  //Tipo string e obrigatório
      price: Yup.number().required(), //Tipo number e obrigatório
      category_id: Yup.number().required(), //Tipo number e obrigatório.
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false}) //Operação abortEarly é para que o validador não pare no primeiro erro, mas indique todos.
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { filename: path } = request.file
    const { name, price, category_id } = request.body

    const product = await Product.create({
      name,
      price: price, 
      category_id,
      path,
    })

    return response.json(product)
  } 
  
  async index(request, response){
    const products = await Product.findAll({
      include: [
        {
          model:Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    })

    return response.json(products)
  }
  
  catch (err) {
    console.log(err)
  }

  

}

export default new ProductController()