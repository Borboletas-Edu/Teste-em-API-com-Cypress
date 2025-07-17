import Joi from 'joi';

const contrato = Joi.object({
  data: Joi.object({
    createdAt: Joi.string(),
    name: Joi.string(),
    photos: Joi.string(),    
    updatedAt: Joi.string(),
    __v: Joi.number(),
    _id: Joi.string()
  })
});

export default contrato;





