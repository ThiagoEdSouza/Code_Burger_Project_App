import * as Yup from 'yup'

import Product from '../models/Product'

class ProductController{
  async store(request, response){

    const schema = Yup.object().shape({
      name: Yup.string().required(),  //Tipo string e obrigatório
      price: Yup.number().required(), //Tipo number e obrigatório
      category: Yup.string().required(), //Tipo string e obrigatório.
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false}) //Operação abortEarly é para que o validador não pare no primeiro erro, mas indique todos.
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { filename: path } = request.file
    const { name, price, category } = request.body

    const product = await Product.create({
      name,
      price: price, 
      category,
      path,
    })

    return response.json(product)
  } catch (err) {
    console.log(err)
  }

}

export default new ProductController()