import * as Yup from 'yup'

export const deleteCardValidator = async (req, res, next) => {
    try {
        const Schema = Yup.object().shape({
            id: Yup.string().required(),
        })

        await Schema.validate(req.params, { abortEarly: false })

        return next()
    } catch (e) {
        return res.status(400).json({
            error: e.errors,
        })
    }
}
