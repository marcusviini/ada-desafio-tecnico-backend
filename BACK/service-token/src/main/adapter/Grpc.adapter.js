export const adapter = (implementation) => async (call, callback) => {
    const req = {
        request: call.request,
    }

    const res = await implementation.handle(req)

    return callback(null, res)
}
