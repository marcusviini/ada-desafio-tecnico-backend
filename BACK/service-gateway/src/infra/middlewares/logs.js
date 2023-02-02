export const generateLog = async (req, res, next) => {
    const date = new Date()
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

    const card = req.url.split('/')[2]

    const methods = {
        DELETE: 'Removido',
        PUT: 'Alterado',
    }

    console.log(
        `${formattedDate} - Card ${card} ${
            req.body?.titulo ? `- ${req.body?.titulo}` : ''
        } - ${methods[req.method]}`
    )
    next()
}
