import * as Yup from 'yup'

export const updateCardValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            titulo: Yup.string().required(),
            conteudo: Yup.string().required(),
            lista: Yup.string().required(),
        })

        const SchemaId = Yup.object().shape({
            id: Yup.string().required(),
        })

        await Schema.validate(req.body, { abortEarly: false })
        await SchemaId.validate(req.params, { abortEarly: false })

        return next()
    } catch (e) {
        return res.status(400).json({
            error: e.errors,
        })
    }
}
