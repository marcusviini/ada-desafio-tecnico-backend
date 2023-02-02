import * as Yup from 'yup'

export const loginValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            login: Yup.string().required(),
            senha: Yup.string().required(),
        })

        await Schema.validate(req.body, { abortEarly: false })

        return next()
    } catch (e) {
        return res.status(400).json({
            error: e.errors,
        })
    }
}
