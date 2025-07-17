import Joi from 'joi';

const contrato = Joi.object({
  data: Joi.object({
    additionalDetails: Joi.array(),
    categories: Joi.array(),
    description: Joi.string(),
    name: Joi.string(),
    photos: Joi.array(),
    price: Joi.number(),
    quantity: Joi.number(),
    specialPrice: Joi.number(),
    visible: Joi.boolean(),
    createdAt: Joi.string(),
    updatedAt: Joi.string(),
    __v: Joi.number(),
    _id: Joi.string()
  })
});

export default contrato;