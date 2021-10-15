const app = require("./app")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new app.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
